'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("students","mobile",Sequelize.BIGINT)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("students","mobile")
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
