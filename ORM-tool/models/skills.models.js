
const sequelize=require("../database/db.config")

const {DataTypes}=require("sequelize")

const {Person}=require("./person.model")

exports.Skills=sequelize.define("skills",{
   skill_id:{
       type:DataTypes.INTEGER,
       primaryKey:true
   },
   skill:{
       type:DataTypes.STRING,
       allowNull:false
   },
   person_id:{
    type:DataTypes.INTEGER,
    references:{
        model:Person,
        key:"person_id"
    }
   }
},{
   createdAt:false,
   timestamps:false,
   updatedAt:false,
   freezeTableName:true
});

// (async()=>await this.Skills.sync())()