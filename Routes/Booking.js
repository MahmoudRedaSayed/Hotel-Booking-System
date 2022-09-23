const express=require("express")
const router=express.Router();
const Booking = require("../models/booking");
const Room = require("../models/Rooms");
const {admin} =require("../Middleware/isAdmin")
const {bookRoom, getUserBookings, cancelBooking,getAllBookings} =require("../Controllers/Booking")
router.route("/").post(bookRoom).put(cancelBooking).get(admin,getAllBookings);
router.get("/:id",getUserBookings);
module.exports=router