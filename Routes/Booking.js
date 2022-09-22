const express=require("express")
const router=express.Router();
const Booking = require("../models/booking");
const Room = require("../models/Rooms");
const {bookRoom} =require("../Controllers/Booking")
router.post("/",bookRoom);
module.exports=router