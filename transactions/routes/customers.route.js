//import express
const { json } = require("body-parser")
const exp=require("express")

//import dotenv
require("dotenv").config()

//customer router
const customerApp=exp.Router()

//import controllers
const {test,openAccount,deposit,withdraw,transfer}=require("../controllers/customer.controller")

//body-parser
customerApp.use(exp.json())

//testing route
customerApp.get("/test",test)

// //open account
customerApp.post("/account",openAccount)

//deposit
customerApp.put("/deposit/account/:acc_no",deposit)

//withdraw
customerApp.put("/withdraw/account/:acc_no",withdraw)

//money transfer
customerApp.put("/transfer/from/:from_acc/to/:to_acc",transfer)

//Export router
module.exports=customerApp