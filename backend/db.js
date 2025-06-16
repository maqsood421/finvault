const mysql = require("mysql2");

const app = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "idontknow"
  // database: ""
});

app.connect((err) => {
  if (err) throw error;
  console.log("Mysql connected Successfully!");
});
