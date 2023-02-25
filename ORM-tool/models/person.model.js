
 const sequelize=require("../database/db.config")

 const {DataTypes}=require("sequelize")

 exports.Person=sequelize.define("person",{
    person_id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    person_name:{
        type:DataTypes.STRING,
        allowNull:false
    }
 },{
    createdAt:false,
    timestamps:false,
    updatedAt:false,
    freezeTableName:true
 });

//  (async()=>await this.Person.sync())()