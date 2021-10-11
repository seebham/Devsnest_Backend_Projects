const { Sequelize } = require("sequelize");
const {
  sequelize_database,
  sequelize_username,
  sequelize_host,
  sequelize_dialect,
  sequelize_password,
} = require("../config");

const sequelize = new Sequelize(
  sequelize_database,
  sequelize_username,
  sequelize_password,
  {
    host: sequelize_host,
    dialect: sequelize_dialect,
  }
);

sequelize.sync({ alter: true });

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established");
    sequelize.query("CREATE EXTENSION IF NOT EXISTS pg_trgm;");
  } catch (err) {
    console.log("Unable to connect db");
  }
})();

module.exports = sequelize;
