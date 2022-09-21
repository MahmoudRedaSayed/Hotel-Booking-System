const express=require("express");
const {ConnectDB}=require("./config/db");
const app=express()
ConnectDB();

app.use(express.json)
const port=process.env.PORT||5000
app.listen(port,()=>{
    console.log("the server is running")
})