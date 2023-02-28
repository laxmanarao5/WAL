//import sequelize
const {sequelize}=require("../db.config")

//import Datatypes from Sequelize module
const {DataTypes}=require("sequelize")

//import Student model
const {Student}=require("./student.model")

//Defining SemisterMarks model
exports.SemesterMarks=sequelize.define("semestermarks",{
    semester:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    maths:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            min:{
                args:1,
                msg:"Marks should be greater than 0"
            },
            max:{
                args:60,
                msg:"Marks should be less than 60"
            }

        }
    },
    physics:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            min:{
                args:1,
                msg:"Marks should be greater than 0"
            },
            max:{
                args:60,
                msg:"Marks should be less than 60"
            }

        }
    },
    chemistry:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            min:{
                args:1,
                msg:"Marks should be greater than 0"
            },
            max:{
                args:60,
                msg:"Marks should be less than 60"
            }

        }
    }
    ,
    roll_no:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        references:{
            model:Student,
            key:"roll_no"
        }
    }
},
{
    timestamps:false,
    freezeTableName:true
})