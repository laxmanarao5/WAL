const sequelize=require("../database/db.config")

const {DataTypes}=require("sequelize")

exports.Emp=sequelize.define("emp",{
    emp_id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    emp_name:{
        type:DataTypes.STRING
    }
    
},
{
    timestamps:false,
    freezeTableName:true
});