//import db connection
const {sequelize}=require("../db.config")

//import datatypes
const {DataTypes}=require("sequelize")
const { timeStamp } = require("console")


exports.Accounts=sequelize.define("accounts",{
    account_no:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    account_type:{
        type:DataTypes.STRING,
        allowNull:false
    },
    customer_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mobile:{
        type:DataTypes.BIGINT
    },
    account_balance:{
        type:DataTypes.INTEGER,
        defaultValue:0
    }
},
{
    timestamps:false,
    freezeTableName:true,
    initialAutoIncrement: 1000
})