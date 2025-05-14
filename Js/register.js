const express = require("express");
const router = express.Router();
// const { insertMember } = require("./userModel");
const UserModel = require("./userModel");

router.post("/", async (req, res) => {
  // 將資料組合成一個物件
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    location: req.body.location,
    password: req.body.password,
  };

  try {
    // 調用 UserModel 的 insertMember 方法，傳遞 userData 物件
    const result = await UserModel.insertMember(userData);
    console.log("資料插入成功:", result);
    res.json({ message: "資料已成功提交到 MySQL!" });
  } catch (error) {
    console.error("資料庫錯誤:", error);
    res.status(500).json({ message: "資料庫錯誤" });
  }
});

module.exports = router;
