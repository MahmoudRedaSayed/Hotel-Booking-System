const express=require("express")
const router=express.Router();
const {getAllRooms,getRoomById}=require("../Controllers/Rooms");
router.get("/",getAllRooms)
router.get("/:id",getRoomById)
module.exports=router;