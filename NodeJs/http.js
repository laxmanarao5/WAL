//ES6 Modules
// import s from test



//common js modules
// module.exports=variable;  //exporting in 

const http=require('http') //should use const as modules should not be used

const server=http.createServer((req,res)=>{  // this arrow function acts as request handler
        //response
        if(req.method=="GET")
        {
            if(req.url=="/users")
            {
                res.end("Sending users data from GET")   //end is used send data as response to client
            }
            if(req.url=="products")
            {
                res.end("Sending Products data from GET") 
            }
        }
        else if(req.method=="POST")
        {
            if(req.url=="/users")
            {
                res.end("Sending users data from POST")   //end is used send data as response to client
            }
            if(req.url=="/products")
            {
                res.end("Sending Products data from POST") 
            }
        }
        else if(req.method=="PUT")
        {
            if(req.url=="/users")
            {
                res.end("Sending users data from PUT")   //end is used send data as response to client
            }
            if(req.url=="/products")
            {
                res.end("Sending Products data from PUT") 
            }
        }
        else if(req.method=="DELETE"){
            if(req.url=="/users")
            {
                res.end("Sending users data from DELETE")   //end is used send data as response to client
            }
            if(req.url=="/products")
            {
                res.end("Sending Products data from DELETE") 
            }
        }
        else{
            res.end("Invalid request")
        }
})
server.listen(80,()=>console.log("Server started on port 80"))