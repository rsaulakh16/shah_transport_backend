'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EmploymentHistory extends Model {
    static associate(models) {
      // Associate with DriverDetails
      EmploymentHistory.belongsTo(models.DriverDetails, {
        foreignKey: 'driverId',
        as: 'driver',
        onDelete: 'CASCADE',
      });
    }
  }

  EmploymentHistory.init(
    {
      driverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'DriverDetails',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      employmentHistory: {
        type: DataTypes.JSONB, // Use JSONB for PostgreSQL, JSON for MySQL
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'EmploymentHistory',
    }
  );

  return EmploymentHistory;
};
