//import sequelize
const {sequelize}=require("../db.config")

//import Datatypes from Sequelize module
const {DataTypes}=require("sequelize")

//Defining student model
exports.Student=sequelize.define("student",{
    roll_no:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        set(name){
            if(name.length<2)
            throw new Error("Name should be more than 2 characters")
            else
            this.setDataValue("name",name)
        }
    },
    date_of_birth:{
        type:DataTypes.DATE,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
},
{
    timestamps:false,
    freezeTableName:true
})