const pool = require("../db");

const createUser = async (name, email, hashedPassword) => {
  const [result] = await pool.execute(
    "INSERT INTO users(name, email, hashedPassword) VALUES(?, ?, ?)",
    [name, email, hashedPassword]
  );

  return result.insertId;
};

const findUserByEmail = async (email) => {
  const [result] = await pool.execute("SELECT * FROM users WHERE email = ? ", [
    email
  ]);

  return result[0];
};

module.exports = { createUser, findUserByEmail };
