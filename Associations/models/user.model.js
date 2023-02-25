const sequelize=require("../database/db.config")

const {DataTypes}=require("sequelize")

exports.User=sequelize.define("users",{
    user_id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    user_name:{
        type:DataTypes.STRING,
        allowNull:false
    }   
},
{
    timestamps:false,
    freezeTableName:true
});