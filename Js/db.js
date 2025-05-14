const mysql = require("mysql2");

// 建立 MySQL 連線池
const pool = mysql.createPool({
  host: "localhost",
  user: "root", // 你的 MySQL 用戶名
  password: "root", // 你的 MySQL 密碼
  database: "swk", // 你的 MySQL 資料庫名稱
  waitForConnections: true,
  connectionLimit: 10, // 最大連線數
  queueLimit: 0,
});

// 使用 Promise 包裝
const promisePool = pool.promise();

module.exports = promisePool;
