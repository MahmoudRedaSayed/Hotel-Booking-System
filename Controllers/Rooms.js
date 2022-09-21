const Room =require("../models/Rooms");
const getAllRooms=async(req,res)=>{
    try{
        const rooms=await Room.find({});
        res.status(200).json(rooms);
    }
    catch(error)
    {
        res.status(400).json("error in server");
    }
}
module.exports={getAllRooms}