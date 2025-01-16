'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DriverDetails', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      driverId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Drivers',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      license_number: Sequelize.STRING,
      license_expiry: Sequelize.STRING,
      license_class: Sequelize.STRING,
      license_province: Sequelize.STRING,
      street_address: Sequelize.STRING,
      city: Sequelize.STRING,
      zipcode: Sequelize.STRING,
      province: Sequelize.STRING,
      country: Sequelize.STRING,
      phone_number: Sequelize.STRING,
      dob: Sequelize.STRING,
      sin: Sequelize.STRING,
      addresses_past_3_years: Sequelize.JSONB,
      medical_expiry: Sequelize.STRING,
      owner_operator: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: null,
      },
      accidents_in_five_years: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: null,
      },
      education: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: null,
      },
      positive_drug_test: Sequelize.BOOLEAN,
      sex: Sequelize.STRING,
      marital_status: Sequelize.STRING,
      number_of_dependents: Sequelize.INTEGER,
      first_person_to_contact: Sequelize.JSONB,
      second_person_to_contact: Sequelize.JSONB,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DriverDetails');
  }
};
