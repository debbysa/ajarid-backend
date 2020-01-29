const Sequelize = require("sequelize");

const sequelize = new Sequelize("ads.ajar", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false  
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("koneksi berhasil ke db ads.ajar");
  })
  .catch(err => {
    console.log("error : ", err);
  });
module.exports = sequelize;

