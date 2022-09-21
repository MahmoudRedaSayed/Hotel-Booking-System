const mongoose=require("mongoose")

const ConnectDB = async ()=>{
    try{
        const con= await mongoose.connect("mongodb+srv://MahmoudReda:01102306392@cluster0.eqhn13z.mongodb.net/Hotel-Booking?retryWrites=true&w=majority",{
            useUnifiedTopology:true,
        })
        console.log("the connection is stable");
    }
    catch(error)
    {
        console.log(error.message)
        process.exit(1);
    }
}

module.exports = {ConnectDB};