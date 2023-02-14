const mysql=require("mysql2")
require("dotenv").config()   //process.env can access all env variables
//Create single connection
//Create connection to DB
const connection=mysql.createConnection({
    host:process.env.HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD
}) 

//export the connection
module.exports=connection
