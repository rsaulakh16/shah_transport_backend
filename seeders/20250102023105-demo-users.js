"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {};)
     */
    await queryInterface.bulkInsert(
      "User",
      [
        {
          username: "admin@shahtransport.com",
          password: "$2y$10$U6GlvkrBWWJFVoDp/RUtDecnAKBRCA0C3ndhoupVRBucFj28zRPsC", //admin123
          role: "ADMIN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],  
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
