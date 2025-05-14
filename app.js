const express = require("express");
const path = require("path"); // 需要导入 path 模块
const app = express();
const loginRouter = require("./Js/login");
const registerRouter = require("./Js/register");

app.use(express.json()); // 用於處理 application/json 的請求
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.get("/signin", (req, res) => {
  res.sendFile(path.join(__dirname, "Sign In", "sign-in.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/loginflow", (req, res) => {
  res.sendFile(path.join(__dirname, "Sign In", "login-flow.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
