const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email === "test@example.com" && password === "password") {
    res.redirect("/dashboard");
  } else {
    res.redirect("/signin");
  }
});

module.exports = router;
