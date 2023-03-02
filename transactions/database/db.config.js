const {Sequelize}=require("sequelize")

require("dotenv").config()

exports.sequelize=new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,{
        host:process.env.HOST,
        dialect:"mysql"

    }
)
