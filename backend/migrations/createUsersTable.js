const pool = require("../db");

const createUsersTable = async () => {
  await pool.execute(`
        CREATE TABLE IF NOT EXISTS users (
            id AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
};

module.exports = createUsersTable;
