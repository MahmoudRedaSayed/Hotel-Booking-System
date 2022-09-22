const express=require("express")
const router=express.Router();
const {getAllRooms,getRoomById,getFilteredRooms}=require("../Controllers/Rooms");
router.route("/").get(getAllRooms).post(getFilteredRooms)
router.get("/:id",getRoomById)
module.exports=router;