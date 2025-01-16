"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class DriverDetails extends Model {
    static associate(models) {
      // Association with Driver
      this.belongsTo(models.Driver, {
        foreignKey: "driverId",
        as: "driver",
        onDelete: "CASCADE",
      });
    }
  }

  DriverDetails.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      driverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      license_number: DataTypes.STRING,
      license_expiry: DataTypes.STRING,
      license_class: DataTypes.STRING,
      license_province: DataTypes.STRING,
      street_address: DataTypes.STRING,
      city: DataTypes.STRING,
      zipcode: DataTypes.STRING,
      province: DataTypes.STRING,
      country: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      dob: DataTypes.STRING,
      sin: DataTypes.STRING,
      addresses_past_3_years: DataTypes.JSONB,
      medical_expiry: DataTypes.STRING,
      owner_operator: {
        type: DataTypes.JSONB,
        allowNull: true,
        defaultValue: null,
      },
      accidents_in_five_years: {
        type: DataTypes.JSONB,
        allowNull: true,
        defaultValue: null,
      },
      education: {
        type: DataTypes.JSONB,
        allowNull: true,
        defaultValue: null,
      },
      positive_drug_test: DataTypes.BOOLEAN,
      sex: DataTypes.STRING,
      marital_status: DataTypes.STRING,
      number_of_dependents: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      modelName: "DriverDetails",
      tableName: "DriverDetails",
    }
  );

  return DriverDetails;
};
