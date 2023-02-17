
const jwt=require("jsonwebtoken")

require("dotenv").config()

const verifyToken=(req,res,next)=>{
    console.log("middleware")

    //token existance verification
    let bearerToken=req.headers.authorization;
    //if exists get token from bearer token
    if(bearerToken==undefined)
        res.status(401).send({message:"Unauthorized access"})
    else{
        //get Bearer token from headers
        let token=bearerToken.split(" ")[1]
        //decode token- if token valid it decodes otherwise raises an error
        try{
            jwt.verify(token,process.env.SECRET_KEY)
            next()
        }
       catch(err){
            res.status(401).send({message:"plz relogin to access"})
       }
    }
    
 
    
    
    }

module.exports=verifyToken