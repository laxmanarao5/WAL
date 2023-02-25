const sequelize=require("../database/db.config")

const {DataTypes}=require("sequelize")

exports.Accounts=sequelize.define("accounts",{
    bank_name:{
        type:DataTypes.STRING,
    },
    account_number:{
        type:DataTypes.BIGINT,
        allowNull:false
    }
    
},
{
    timestamps:false,
    freezeTableName:true
});