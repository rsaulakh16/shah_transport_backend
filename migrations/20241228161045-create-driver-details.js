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
      owner_operator: Sequelize.BOOLEAN,
      truck_make: Sequelize.STRING,
      last_annual_inspection: Sequelize.STRING,
      alternative_insurance: Sequelize.STRING,
      wsib_number: Sequelize.STRING,
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
