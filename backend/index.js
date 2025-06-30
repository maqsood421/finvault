const express = require("express");
const pool = require("./config/db");
const createTables = require("./config/schema");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ Connected to MySQL!");
    connection.release();
  } catch (err) {
    console.error("❌ MySQL connection failed:", err.message);
  }
})();

app.get("/", (req, res) => {
  res.send("FinVault Backend API is running 🚀");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
