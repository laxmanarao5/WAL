//import sequelize
const {Sequelize}=require("sequelize")

//import mysql2
const mysql=require("mysql2")

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


//Create connection to DB
exports.connection=mysql.createConnection({
    host:process.env.HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASS
}) 