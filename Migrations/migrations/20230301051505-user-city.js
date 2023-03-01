'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn("users","city",Sequelize.STRING)
    //await queryInterface.addColumn("users","city",{
    //  type:Sequelize.STRING,allowNull:false})
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn("users","city")
  }
};
