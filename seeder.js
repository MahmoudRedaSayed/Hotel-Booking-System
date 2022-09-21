const Room =require("./models/Rooms");
const {ConnectDB}=require("./config/db");
const rooms=require("./data/rooms")


const importData=async ()=>{
    try{
        ConnectDB();
       await Room.deleteMany();


        const createdRooms=await Room.insertMany(rooms);

        console.log("the data is imported");      
        process.exit();  
    }
    catch(error){
        console.log(error.message);
    }
}

const destroyData=async ()=>{
    try{
       await Room.deleteMany();


        console.log("the data is destroied");      
        process.exit();  
    }
    catch(error){
        console.log(error.message);
    }
}

if(process.argv[2]==="-d")
{
    destroyData();
}
else{
    importData();
}

