const mysql = require("mysql2/promise");

const mysql_db = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "idontknow",
    database: "finvault_db"
  });
  return connection;
};

module.exports = mysql_db;
