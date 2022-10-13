const express=require("express")
const router=express.Router();
const {getAllRooms,getRoomById,getFilteredRooms,addRoom}=require("../Controllers/Rooms");
const {admin}=require("../Middleware/isAdmin");
router.route("/").get(getAllRooms).post(admin,addRoom)
router.route("/filter").post(getFilteredRooms)
router.get("/:id",getRoomById)
module.exports=router;