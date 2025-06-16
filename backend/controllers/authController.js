const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createUser, findUserByEmail } = require("../models/userModel");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existing = await findUserByEmail(email);
    // checks for exisiting email in the database
    if (existing)
      return res.status(400).json({ message: "Email already registered!" });

    const hashed = await bcrypt.hash(password, 20);
    const userId = await createUser(name, email, hashed);

    return res.status(201).json({ message: "Signup Successfully!", userId });
  } catch (err) {
    console.error("Signup Error", err);
    res.status(500).json({ message: "Server error!" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 20);
    const user = await findUserByEmail(email);

    if (!user) return res.status(404).json({ message: "User not found!" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Incorrect password!" });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );

    res.json({ message: "Login Successfully!", token });
  } catch (err) {
    console.error("Login Error", err);
    return res.status(500).json({ message: "Server Error!" });
  }
};

module.exports = { signup, login };
