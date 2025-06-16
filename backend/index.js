const express = require("express");
const mysql_db = require("./db");

const PORT = process.env.PORT || 4000;

const app = express();

(async () => {
  const db = await mysql_db();
  const [result] = await db.execute(`SELECT  2 * 2`);
  console.log(result);
})();

app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
});
