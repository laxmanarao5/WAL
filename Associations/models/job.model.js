const sequelize=require("../database/db.config")

const {DataTypes}=require("sequelize")

exports.Job=sequelize.define("job",{
    job_id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    job_desc:{
        type:DataTypes.STRING
    }
    
},
{
    timestamps:false,
    freezeTableName:true
});