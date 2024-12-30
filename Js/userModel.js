const db = require("./db"); // 引入連線池

class UserModel {
  static async insertMember(userData) {
    const query = `INSERT INTO member (FIRST_NAME, LAST_NAME, EMAIL, LOCATION, PASSWORD) VALUES (?, ?, ?, ?, ?)`;
    const values = [
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.location,
      userData.password,
    ];

    try {
      const [result] = await db.execute(query, values);
      return result;
    } catch (err) {
      console.error("MySQL 插入錯誤:", err);
      throw err;
    }
  }

  // 獲取用戶
  static async getUserById(userId) {
    const query = `SELECT * FROM users WHERE id = ?`;
    const values = [userId];

    try {
      const [rows] = await db.execute(query, values);
      return rows[0];
    } catch (err) {
      console.error("MySQL 查詢錯誤:", err);
      throw err;
    }
  }

  // 更新用戶
  static async updateUser(userId, updateData) {
    const query = `UPDATE users SET firstName = ?, lastName = ?, email = ?, location = ?, password = ? WHERE id = ?`;
    const values = [
      updateData.firstName,
      updateData.lastName,
      updateData.email,
      updateData.location,
      updateData.password,
      userId,
    ];

    try {
      const [result] = await db.execute(query, values);
      return result;
    } catch (err) {
      console.error("MySQL 更新錯誤:", err);
      throw err;
    }
  }

  // 刪除用戶
  static async deleteUser(userId) {
    const query = `DELETE FROM users WHERE id = ?`;
    const values = [userId];

    try {
      const [result] = await db.execute(query, values);
      return result;
    } catch (err) {
      console.error("MySQL 刪除錯誤:", err);
      throw err;
    }
  }
}

module.exports = UserModel;
