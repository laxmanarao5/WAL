//import sequelize
const {sequelize}=require("../db.config")

//import Datatypes from Sequelize module
const {DataTypes}=require("sequelize")

//Defining Address model
exports.Address=sequelize.define("address",{
    street:{
        type:DataTypes.STRING,
        allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isIn:[['hyderabad',"chennai","bangalore"]]
        }
    }
},
{
    timestamps:false,
    freezeTableName:true
})