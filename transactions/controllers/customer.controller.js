//import express-async-handler
const expressAsyncHandler=require("express-async-handler")

//import accounts
const {Accounts}=require("../database/models/account.model")

//test
exports.test=(req,res)=>{
    res.send({message:"Customer API Working fine"})
}

//import sequelize
const {sequelize}=require("../database/db.config")

// //Open account
exports.openAccount=expressAsyncHandler(async(req,res)=>{
    Accounts.create(req.body)
    res.send({message:"Account created sucessfully"})
})

//Deposit
exports.deposit=expressAsyncHandler(async(req,res)=>{
    let result=await Accounts.findOne({where:{
        account_no:req.params.acc_no
    }})
    if(req.body.amount<=10000 && req.body.amount>=1000){
    if(result!=null){

        let total=result.account_balance+req.body.amount
        let updateCount= await Accounts.update({account_balance:total},{where:{
            account_no:req.params.acc_no
        }})
        res.send({message:"Deposit sucessfull",available_balance:total})
    }
    else{
        res.send({message:"account numer not valid"})
    }}
    else
    res.send({message:"deposits between 1000 to 10000 are allowed"})
   
})

//Withdraw

exports.withdraw=expressAsyncHandler(async(req,res)=>{
    let result=await Accounts.findOne({where:{
        account_no:req.params.acc_no
    }})
    if(result!=null){
        if(req.body.amount<=result.account_balance)
        {
            let total=result.account_balance-req.body.amount
            await Accounts.update({account_balance:total},{where:{
            account_no:req.params.acc_no
        }})
        res.send({message:"Withdraw sucessfull",available_balance:total})
        }
        else{
            res.send({message:"Insufficient funds"})
        }
        
    }
    else{
        res.send({message:"account numer not valid"})
    }
   
})

//Money transfer
exports.transfer=expressAsyncHandler(async(req,res)=>{
    
    const payerRes=await Accounts.findOne({where:{
        account_no:req.params.from_acc
    }})
    const payeeRes=await Accounts.findOne({where:{
        account_no:req.params.to_acc
    }})
    if(payerRes.account_balance>=req.body.amount)
    {    
            //calculating payers balance
            payer_total=payerRes.account_balance-req.body.amount
             //calculating payee balance
            payee_total=payeeRes.account_balance+req.body.amount
            const t = await sequelize.transaction();
              try {

                await Accounts.update({account_balance:payer_total},{where:{
                    account_no:req.params.from_acc
                }, transaction: t });
                
                // //throw error to check transaction
                throw new Error("error created")

                //update payee account balance
                await Accounts.update({account_balance:payee_total},{where:{
                    account_no:req.params.to_acc
                },transaction: t })
          
                res.send({message:"Money transfer sucessfull"})
              
                // We commit the transaction.
                await t.commit();
              
              } catch (error) {
              
                // If the execution reaches this line, an error was thrown.
                // We rollback the transaction.
                await t.rollback();
                res.send({message:"Payment failed , please try again"})
              
              }
    }
    else{
        res.send({message:"Insufficient funds"})
    }
    
})