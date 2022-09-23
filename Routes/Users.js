const express=require("express");
const { registerUser,loginUser,getAllUsers} = require("../Controllers/Users");
const {admin}=require("../Middleware/isAdmin");
const router=express.Router();
router.route("/").get(admin,getAllUsers);
router.post("/register",registerUser);
router.post("/login",loginUser);
module.exports=router;