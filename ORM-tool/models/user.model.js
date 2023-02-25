const sequelize=require("../database/db.config")

const {DataTypes}=require("sequelize")

const bcryptjs=require("bcryptjs")

//Create “User”  model with properties firstName,lastName,email,password,age & gender

exports.User=sequelize.define("user",{
    firstname:{
        type:DataTypes.STRING,
        allowNull:false,
        set(input){
            this.setDataValue("firstname",input.toLowerCase())
        },
        validate:{
            checkname(firstname){
                if(firstname.length<=4){
                    throw new Error("Name is too short,it should be more than 5 characters")

                }
            }    
        },
        get(){
            let fname=this.getDataValue("firstname")
            let lname=this.getDataValue("lastname")
            let gender=this.getDataValue("gender")
            if(gender=="male")
            {
                return "Mr. "+fname+" "+lname
            }
            else{
                return "Ms. "+fname+" "+lname
            }
            
        }
        
    },
    lastname:{
        type:DataTypes.STRING,
        allowNull:false,
        set(input){
            this.setDataValue("lastname",input.toLowerCase())
        },get(){

        }
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true,
        validate:{
            isEmail:{
                msg:"Email is invalid"
            }
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        set(pass){
            let hashedPassword=bcryptjs.hashSync(pass,3)
            this.setDataValue("password",hashedPassword)
        }
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            min:{
                args:20,
                msg:"Age should be greater than 20"
            },
            max:{
                args:25,
                msg:"Age should be less than 25"
            }
        }
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:false,
        set(input){
            this.setDataValue("gender",input.toLowerCase())
        }
        ,
        checkGender(gender){
            if(gender in ['Male', 'male','MALE','Female','female','FEMALE'])
            {

            }
            else{
                throw new Error("Gender is not valid ,Please enter male or female")
            }
        } 
    }
});

// (async()=>{await this.User.sync()})()