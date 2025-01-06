'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Questionnaire extends Model {
    static associate(models) {
      // Define association with DriverDetails
      Questionnaire.belongsTo(models.DriverDetails, {
        foreignKey: 'driverId',
        as: 'driver',
        onDelete: 'CASCADE',
      });
    }
  }

  Questionnaire.init(
    {
      driverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DriverDetails',
          key: 'id',
        },
      },
      questions: {
        type: DataTypes.JSONB, // JSONB is supported in PostgreSQL. Use JSON for other databases like MySQL.
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Questionnaire',
    }
  );

  return Questionnaire;
};
