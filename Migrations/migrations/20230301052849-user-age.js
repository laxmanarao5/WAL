'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("users","age",Sequelize.INTEGER)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("users","age")
  }
};
