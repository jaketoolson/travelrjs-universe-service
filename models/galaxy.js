
// TODO: https://github.com/sequelize/sequelize/issues/6524
const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const Galaxy = sequelize.define(
    "Galaxy",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      uuid: {
        type: DataTypes.STRING,
        defaultValue: uuidv4(),
      },
      name: DataTypes.STRING,
      created_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: null,
        allowNull: true,
      }
    },
    {
      tableName: "galaxies",
      timestamps: true,
      underscored: true,
    }
  );

  Galaxy.associate = (models) => {
    models.Planet.hasMany(models.Planet,{
      as: 'planets',
      foreignKey: 'galaxy_id'
    });
  };

  return Galaxy;
};