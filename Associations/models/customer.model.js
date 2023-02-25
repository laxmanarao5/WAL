const sequelize=require("../database/db.config")

const {DataTypes}=require("sequelize")

exports.Customers=sequelize.define("customers",{
    cust_id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    cust_name:{
        type:DataTypes.STRING
    }   
},
{
    timestamps:false,
    freezeTableName:true
});