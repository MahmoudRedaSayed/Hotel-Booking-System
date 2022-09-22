const express=require("express");
const app=express()
const cors=require("cors")
const {ConnectDB}=require("./config/db");
const RoomsRouter=require("./Routes/Rooms")

app.use(cors());
app.use(express.json());
app.listen(5000,()=>{
    ConnectDB();
    console.log("the server is on")
})
app.use("/api/rooms",RoomsRouter)