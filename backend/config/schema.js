const pool = require("./db");

async function createTables() {
  try {
    // 1. Admin table
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS admin (
        id INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      );
    `);

    // 2. Branches
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS branch (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        address TEXT,
        city VARCHAR(100),
        state VARCHAR(100),
        zip_code VARCHAR(10)
      );
    `);

    // 3. Customers
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS customer (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE,
        phone VARCHAR(20),
        address TEXT,
        branch_id INT,
        FOREIGN KEY (branch_id) REFERENCES branch(id) ON DELETE SET NULL
      );
    `);

    // 4. Accounts
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS account (
        id INT PRIMARY KEY AUTO_INCREMENT,
        customer_id INT,
        account_type VARCHAR(50),
        balance DECIMAL(12, 2) DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (customer_id) REFERENCES customer(id) ON DELETE CASCADE
      );
    `);

    // 5. Loans
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS loan (
        id INT PRIMARY KEY AUTO_INCREMENT,
        customer_id INT,
        amount DECIMAL(12, 2) NOT NULL,
        interest_rate DECIMAL(5, 2),
        duration_months INT,
        issue_date DATE,
        status ENUM('active', 'closed') DEFAULT 'active',
        FOREIGN KEY (customer_id) REFERENCES customer(id) ON DELETE CASCADE
      );
    `);

    // 6. Loan Payments
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS loan_payment (
        id INT PRIMARY KEY AUTO_INCREMENT,
        loan_id INT,
        payment_date DATE,
        amount_paid DECIMAL(12, 2),
        FOREIGN KEY (loan_id) REFERENCES loan(id) ON DELETE CASCADE
      );
    `);

    // 7. Credit Cards
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS credit_card (
        id INT PRIMARY KEY AUTO_INCREMENT,
        customer_id INT,
        card_number VARCHAR(16) UNIQUE,
        expiry_date DATE,
        cvv VARCHAR(5),
        card_type ENUM('Visa', 'MasterCard', 'RuPay'),
        limit_amount DECIMAL(12,2),
        balance DECIMAL(12,2),
        FOREIGN KEY (customer_id) REFERENCES customer(id) ON DELETE CASCADE
      );
    `);

    // 8. Transactions
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS transaction (
        id INT PRIMARY KEY AUTO_INCREMENT,
        account_id INT,
        type ENUM('deposit', 'withdrawal', 'transfer'),
        amount DECIMAL(12, 2),
        description TEXT,
        transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (account_id) REFERENCES account(id) ON DELETE CASCADE
      );
    `);

    console.log("✅ All tables created successfully!");
  } catch (err) {
    console.error("❌ Error creating tables:", err);
  }
}

// createTables();
