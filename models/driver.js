"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    static associate(models) {
      // Association with DriverDetails
      this.hasMany(models.DriverDetails, {
        foreignKey: "driverId",
        as: "details",
        onDelete: "CASCADE",
      });
    }
  }

  Driver.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email_verified: DataTypes.BOOLEAN,
      isViewed: DataTypes.BOOLEAN,
      agreedAllPolicies: { type: DataTypes.BOOLEAN, defaultValue: false },
      otp: DataTypes.STRING,
      otp_expires_at: DataTypes.DATE,
      application_status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Driver",
      tableName: "Drivers",
    }
  );

  return Driver;
};
