const { Sequelize } = require("sequelize");
const { Umzug, SequelizeStorage } = require("umzug");
const path = require("path");

(async () => {
  const sequelize = new Sequelize({
    username: "mrtechne_roop",
    password: "nIY%-0(Q3i_v",
    database: "mrtechne_shah_transport",
    host: "127.0.0.200",
    dialect: "postgres",
  });

  const umzug = new Umzug({
    migrations: {
      glob: path.join(__dirname, "migrations/*.js"),
    },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
  });

  try {
    console.log("Starting migrations...");
    await umzug.up();
    console.log("Migrations completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
})();
