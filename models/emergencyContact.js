'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EmergencyContact extends Model {
    static associate(models) {
      // Associate with DriverDetails
      EmergencyContact.belongsTo(models.DriverDetails, {
        foreignKey: 'driverId',
        as: 'driver',
        onDelete: 'CASCADE',
      });
    }
  }

  EmergencyContact.init(
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
      emergencyContacts: {
        type: DataTypes.JSONB, 
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'EmergencyContact',
    }
  );

  return EmergencyContact;
};
