const exp=require("express")
const app=exp()
const cors=require("cors")
app.listen(80,()=>{
    console.log("listening to 80")
})

app.use(cors({
    origin:['http://192.168.26.98:5500']
}))


app.get("/test",(req,res)=>{
    res.send({message:"testing api"})
})