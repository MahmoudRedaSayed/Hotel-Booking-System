const mongoose=require("mongoose")

const ConnectDB = async ()=>{
    try{
        const con= await mongoose.connect("",{
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
