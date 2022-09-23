const User =require("../models/User");
const registerUser= async (req,res)=>{
    const{user}=req.body;
    try{
        const createdUser= await User.create(user);
        if(createdUser)
        {
            res.json({
                _id:createdUser._id,
                name:createdUser.name,
                email:createdUser.email,
                Admin:createdUser.Admin
            })
        }
    }
    catch(error)
    {
        res.status(400).json("error in server");
    }
}

const loginUser= async (req,res)=>{
    console.log(req.body);
    const{email,password}=req.body;
    try{
        const findUser= await User.findOne({email});
        if(findUser&&await(findUser.matchPassword(password)))
        {
            res.json({
                _id:findUser._id,
                name:findUser.name,
                email:findUser.email,
                Admin:findUser.Admin
            })
        }
        else
        {
            res.status(400).json("error in data");
        }
    }
    catch(error)
    {
        res.status(400).json("error in server");
    }
}
const getAllUsers=async(req,res)=>{
    try{
        const users=await User.find({});
        console.log("get users",users);
        res.status(200).json(users);
    }
    catch(error)
    {
        res.status(400).json("error in server");
    }
}
module.exports={registerUser,loginUser,getAllUsers}