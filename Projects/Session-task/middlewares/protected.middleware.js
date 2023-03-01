exports.protectedRoute=(req,res,next)=>{
    console.log(req.session.email);
    if(req.session.email!=undefined)
    next()
    else
    res.send({message:"Session expired"})
}