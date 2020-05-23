const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Amenity",
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
      slug: DataTypes.STRING,
      description: DataTypes.STRING,
      is_active: {
        type: DataTypes.DATE,
        defaultValue: null,
      },
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
      tableName: "amenities",
      timestamps: true,
      underscored: true,
    }
  );
};