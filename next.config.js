require("dotenv").config();

module.exports = {
  //環境変数を設定する
  env: {
    X_API_KEY: process.env.X_API_KEY,
    X_WRITE_API_KEY: process.env.X_WRITE_API_KEY,
  },
};
