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
const getRoomById=async (req,res)=>{
    try{
        const {id}=req.params;
        const room=await Room.findById(id);
        if(room)
        {
            res.status(200).json(room);
        }
        else
        {
            res.status(404).json("the room not found");
        }
    }
    catch(error)
    {
        res.status(400).json("error in server");
    }
}
module.exports={getAllRooms,getRoomById}