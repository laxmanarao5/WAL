
const mysql=require("mysql2")
require("dotenv").config()
const connection=mysql.createConnection({
    host:process.env.HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD
})

module.exports=connection