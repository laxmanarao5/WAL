//import express js
const exp=require("express")
//calling express constructor
const app=exp()
//exposing server to port 80
app.listen(80,(err)=>err?console.log("error : ",err):console.log("Server listening to port 80"))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

