//Sample data
let users=[
    {
        username:"laxman",
        email:"lakshmana5296@gmail.com",
        age:20
    },
    {
        username:"deepthi",
        email:"deepthi@gmail.com",
        age:21
    }
];

//Get All Users
const getAllUsers=(req,res)=>{ 
    res.send({message:"users Data",payload:users}) 
}

//Get users by email
const getUsersByEmail=(req,res)=>{    
    let emailFromUrl=req.params.email
    let userInfo=users.find(userObject=>userObject.email===emailFromUrl)
    if(userInfo==undefined)
    {
        res.send({message:"User not found"})
    }
    else{
        res.send({message:"user found",payload:userInfo})
    }
}

//get users bu email and username
const getUsersByEmailAndUsername=(req,res)=>{
    //
    let emailFromUrl=req.params.email;
    let usernameFromUrl=req.params.username;
    let userInfo=users.find(userObject=>userObject.email===emailFromUrl && userObject.username===usernameFromUrl)
    if(userInfo==undefined)
    {
        res.send({message:"User not found"})
    }
    else{
        res.send({message:"user found",payload:userInfo})
    }
}

//Create user
const createUser=(req,res)=>{
    let newuser=req.body;
    let flag=users.find((element)=>element.username==newuser.username)
    if(flag==undefined)
    {
    users.push(newuser)
    console.log(newuser)
    res.send({message:"New User added sucessfully"})
    }
    else
    {
        res.send({message:"User already exists"})
    } 
    
}

//Modify user
const modifyUser=(req,res)=>{

    let userInfo=req.body
    let indexOfUser=users.findIndex((userObject)=>userObject.email===userInfo.email)
    if(indexOfUser===-1)
    {
        res.send({message:"User not found"})
    }
    else
    {
        users.splice(indexOfUser,1,userInfo)
        res.send({message:"User modified sucessfully"})
    }
}

//Delete user by email
const deleteUserByEmail=(req,res)=>{
    let userEmailFromUrl=req.params.email;
    let indexOfUser=users.findIndex(userObject=>userObject.email===userEmailFromUrl)
    if(indexOfUser===-1)
    {
        res.send({message:"User not found"})
    }
    else
    {
        users.splice(indexOfUser,1)
        res.send({message:"User Deleted sucessfully"})
    }
}

module.exports={
    getAllUsers,
    getUsersByEmail,
    getUsersByEmailAndUsername,
    createUser,
    modifyUser,
    deleteUserByEmail
}