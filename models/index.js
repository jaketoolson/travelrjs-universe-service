'use strict';

// TODO: Do I want this helper?
let fs        = require('fs');
let path      = require('path');
let Sequelize = require('sequelize');
let basename  = path.basename(__filename);
let env       = process.env.NODE_ENV || 'development';
let config    = require(__dirname + '/../config/db.js')[env];
let db        = {};
let sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    let model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// FIXME: Not a fan of the same word, different case, holding completely different values. Deep dive into this.
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;