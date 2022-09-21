const express=require("express")
const router=express.Router();
const {getAllRooms}=require("../Controllers/Rooms");
router.get("/",getAllRooms)
module.exports=router;