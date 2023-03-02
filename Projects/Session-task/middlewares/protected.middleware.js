exports.protectedRoute=(req,res,next)=>{
    console.log(req.session.email);

    req.headers.cookie==undefined?res.send({message:"Unautherised access "}):req.session.email!=undefined?next(): res.send({message:"Session expired re-login"})
}