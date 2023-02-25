//import sequelize
const sequelize = require("../database/db.config");
const {DataTypes}=require("sequelize")

const bcryptjs=require("bcryptjs")

//create customer model

exports.Customer=sequelize.define("customer",{      //Here model name is converted into plural form like customer- customers using reflection library
    customer_id:{
        type:DataTypes.INTEGER,
        primaryKey:true       //if primary key not added to model , it will create a property called id as primaru key and with auto increment
    },
    customer_name:{
        type:DataTypes.STRING,
        allowNull:false,      //not null constraint
        get(){            //getter is executed every time we fetch data  
                            //if getter is declared ,it overrides default getter and execute only overiden getter will leads to not getting required data, same with setter also
            let customerName=this.getDataValue("customer_name")
            return "Mr "+customerName
        },
        set(custName){
            this.setDataValue("customer_name",custName.toLowerCase())
        }
        ,
        validate:{
            notEmpty:{
                msg:"Name should not be empty"
            },
            checkname(customer_name){
                if(customer_name.length<5){
                    throw new Error("Name is too short")
                }
                
            }
        }
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false,
        get(){       //getters will be executed automatically while quering the data
            let customerAge=this.getDataValue("age")
            return customerAge+" Years"
        },
        validate:{
            isNumeric:{
                msg:"age should be number"
            },
            min:{
                msg:"Age should be more than 20",
                args:20
            },
            max:{
                msg:"Age should be less than 40",
                args:40
            }
        }
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
           
            isEmail:{
                msg:"Email is not valid"
            }
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        set(pass){    //setter is executed when insert data into database
            //hash password
            let hashedPassword=bcryptjs.hashSync(pass,3)
            this.setDataValue("password",hashedPassword)
            //set data value
        }
    }
},{
    //
    timestamps:false,
    createdAt:false,
    updatedAt:false,
    //freezeTableName:true //create table with the name given in define method 
    //tableName:"abcd"       //force to create table with given name 
}
);
// (async()=>await this.Customer.sync())()   //IIFE (Immediately Invoking Function Expression)  


