const sequelize=require("../database/db.config")

const {DataTypes}=require("sequelize")

exports.Contact=sequelize.define("contact",{
    mobile:{
        type:DataTypes.BIGINT,
        primaryKey:true
    },
    telephone:{
        type:DataTypes.BIGINT,
        allowNull:false
    }   
},
{
    timestamps:false,
    freezeTableName:true
});