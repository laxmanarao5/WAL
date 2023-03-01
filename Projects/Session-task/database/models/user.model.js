//import sequelize
const {sequelize}=require("../db.config")

//import Datatypes from Sequelize module
const {DataTypes}=require("sequelize")

//import bcryptjs for passwork hasing
const bcryptjs=require("bcryptjs")

//Defining User model
exports.User=sequelize.define("user",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        primaryKey:true,
        validate:{
            isEmail:true
        }

    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        set(pass){
            let hashedPassword=bcryptjs.hashSync(pass,3)
            this.setDataValue("password",hashedPassword)
        }
    }
},
{
    timestamps:false,
    freezeTableName:true
})