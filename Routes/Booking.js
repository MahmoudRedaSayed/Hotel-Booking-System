const express=require("express")
const router=express.Router();
const Booking = require("../models/booking");
const Room = require("../models/Rooms");
const {bookRoom, getUserBookings, cancelBooking} =require("../Controllers/Booking")
router.route("/").post(bookRoom).put(cancelBooking);
router.get("/:id",getUserBookings);
module.exports=router