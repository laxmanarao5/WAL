'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    //Declare array
    //iterate through loop for no of records
    //create object by calling faker call

  //push array in bulkInsert
   await queryInterface.bulkInsert("students",[{
    firstName:"laxman",
    email:"lakshmana5296",
    age:18,
    createdAt:new Date(),
    updatedAt:new Date()
   },
    {
      firstName:"laxman",
      email:"laxman@gmail.com",
      age:20,
      createdAt:new Date(),
      updatedAt:new Date()
     }
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("students",null,{})
  }
};
