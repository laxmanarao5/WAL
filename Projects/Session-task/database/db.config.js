//import sequelize
const {Sequelize}=require("sequelize")

//import environment variable module
require("dotenv").config

//create connection with database
exports.sequelize=new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,{
        host:process.env.HOST,
        dialect:"mysql"
    }
)
