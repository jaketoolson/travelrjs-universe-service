const Sequelize = require("sequelize");
const path = require('path');

module.exports = {
  development: {
    username: null,
    password: null,
    database: 'travelr',
    host: '127.0.0.1',
    dialect: 'sqlite',
    operatorsAliases: Sequelize.Op,
    seederStorage: "sequelize",
    seederStorageTableName: "db_seeds",
    migrationStorageTableName: "db_migrations",
    storage: path.resolve('src', 'db.sqlite'),
  },
  test: {
    username: null,
    password: null,
    database: 'travelr',
    host: '127.0.0.1',
    dialect: 'sqlite',
    operatorsAliases: Sequelize.Op,
    seederStorage: "sequelize",
    seederStorageTableName: "db_seeds",
    migrationStorageTableName: "db_migrations",
    storage: path.resolve('src', 'db-test.sqlite'),
  },
};