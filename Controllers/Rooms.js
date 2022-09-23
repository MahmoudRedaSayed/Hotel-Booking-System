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
const getFilteredRooms=async(req,res)=>{
    try{
        const {searchKey,type}=req.body;
        console.log(req.body)
        var rooms;
        if(type&&type!=="all")
        {
            rooms=await Room.find({type:type});
        }
        else{
            rooms=await Room.find({});
        }
        if(searchKey)
        {
            const filteredRooms = rooms.filter(room=>room.name.toLowerCase().includes(searchKey.toLowerCase()))
            res.status(200).json(filteredRooms);
        }
        else
        {

            res.status(200).json(rooms);
        }
    }
    catch(error)
    {
        res.status(400).json("error in server");
    }
}
const addRoom=async(req,res)=>{
    try{
            const {room}=req.body;
            console.log("recived room",room)
            const createdRoom=await Room.create(room);
            if(createdRoom)
            {
                res.status(200).json("room is added")
            }
            else
            {
                res.status(400).json("error in data");
            }
    }
    catch(error)
    {
        res.status(400).json("error in server"+error);
    }
}
module.exports={getAllRooms,getRoomById,getFilteredRooms,addRoom}