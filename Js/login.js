const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    if (email === "test@example.com" && password === "password") {
      res.redirect("/dashboard");
    } else {
      res.redirect("/signin");
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
