const { Sequelize } = require("sequelize");
const { Umzug, SequelizeStorage } = require("umzug");
const path = require("path");

(async () => {
  const sequelize = new Sequelize({
    username: 'postgres',
    password: 'mrtech',
    database: 'shah_transport',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: console.log, // Log SQL queries for debugging
  });
  // const sequelize = new Sequelize({
  //   username: "mrtechne_roop",
  //   password: "nIY%-0(Q3i_v",
  //   database: "mrtechne_shah_transport",
  //   host: "127.0.0.200",
  //   dialect: "postgres",
  //   logging: console.log, // Log SQL queries for debugging
  // });

  const umzug = new Umzug({
    migrations: {
      glob: "./migrations/*.js",
      resolve: ({ name, path }) => {
        const migration = require(path);
        return {
          name,
          up: async () =>
            migration.up(sequelize.getQueryInterface(), Sequelize),
          down: async () =>
            migration.down(sequelize.getQueryInterface(), Sequelize),
        };
      },
    },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
  });

  try {
    console.log("Connecting to the database...");
    await sequelize.authenticate();
    console.log("Connection established successfully!");

    console.log("Starting migrations...");
    await umzug.up();
    console.log("Migrations completed successfully!");
  } catch (error) {
    console.error("Migration failed:", error.message);
    console.error("Stack Trace:", error.stack);
  } finally {
    await sequelize.close();
    console.log("Database connection closed.");
  }
})();
