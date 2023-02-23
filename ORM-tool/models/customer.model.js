//import sequelize
const sequelize = require("../database/db.config");
const {DataTypes}=require("sequelize")

//create customer model

exports.Customer=sequelize.define("customer",{      //Here model name is converted into plural form like customer- customers using reflection library
    customer_id:{
        type:DataTypes.INTEGER,
        primaryKey:true       //primary key constraint
    },
    customer_name:{
        type:DataTypes.STRING,
        allowNull:false      //not null constraint
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    //
    timestamps:false,
    createdAt:false,
    updatedAt:false,
    //freezeTableName:true //create table with the name given in define method 
    //tableName:"abcd"       //force to create table with given name 
}
);
(async()=>await this.Customer.sync())()   //IIFE (Immediately Invoking Function Expression)  


