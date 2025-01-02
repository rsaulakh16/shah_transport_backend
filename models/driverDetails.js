'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DriverDetails extends Model {
    static associate(models) {
      // Association with Driver
      this.belongsTo(models.Driver, {
        foreignKey: 'driverId',
        as: 'driver',
        onDelete: 'CASCADE',
      });
    }
  }

  DriverDetails.init({
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
    license_expiry: DataTypes.DATE,
    license_class: DataTypes.STRING,
    license_province: DataTypes.STRING,
    street_address: DataTypes.STRING,
    city: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    province: DataTypes.STRING,
    country: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    dob: DataTypes.DATE,
    sin: DataTypes.STRING,
    addresses_past_3_years: DataTypes.JSONB,
    medical_expiry: DataTypes.DATE,
    owner_operator: DataTypes.BOOLEAN,
    truck_make: DataTypes.STRING,
    last_annual_inspection: DataTypes.DATE,
    alternative_insurance: DataTypes.STRING,
    wsib_number: DataTypes.STRING,
    sex: DataTypes.STRING,
    marital_status: DataTypes.STRING,
    number_of_dependents: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  }, {
    sequelize,
    modelName: 'DriverDetails',
    tableName: 'DriverDetails',
  });

  return DriverDetails;
};
