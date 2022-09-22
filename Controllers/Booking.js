const Booking = require("../models/booking");
const Room = require("../models/Rooms");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");
const stripe = require("stripe")(
  "sk_test_51Lk44xDFJKV4Y7Ss49FH6jZZh7uvHpMspYaLmhS9iyR9QUMUAzK0ldEooGrzV0gT99NMbhI98mY1dDzr0LVbAxLZ00K2ypxIJd"
);
const bookRoom= async (req, res) => {
  const { room, fromdate, todate, totalDays, totalAmount, user , token } = req.body;
    try {
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
      });

      const payment = await stripe.charges.create(
        {
          amount: (totalAmount * 100),
          currency: "inr",
          customer: customer.id,
          receipt_email: token.email,
        },
        {
          idempotencyKey: uuidv4(),
        }
      );

      if (payment) {
        console.log("herrer")
          const newbooking = await  Booking.create({
            userid: user._id,
            room: room.name,
            roomid: room._id,
            totalDays: totalDays,
            fromdate: moment(fromdate).format("DD-MM-YYYY"),
            todate: moment(todate).format("DD-MM-YYYY"),
            totalAmount: totalAmount,
            transactionId: "1234",
            status:'booked'
          });
        if(newbooking)
        {
            const oldroom = await Room.findById(room._id);
      
            oldroom.currentbookings.push({
              bookingid: newbooking._id,
              fromdate: moment(fromdate).format("DD-MM-YYYY"),
              todate: moment(todate).format("DD-MM-YYYY"),
              userid: user._id,
              status:'booked'
            });
            await oldroom.save();
          res.send("Room Booked Successfully");
        }   
        else 
        {
                res.send("Payment failed");
        }
    }
    }
    catch (error) {
        res.status(400).json({ message: "Something went wrong" + error });
      }
    };
    const getUserBookings=async(req,res)=>{
      try{
          const {id}=req.params;
          console.log("id",id)
          const bookings=await Booking.find({userid:id});
          res.status(200).json(bookings);
      }
      catch(error)
      {
        res.status(400).json({ message: "Something went wrong" + error });  
      }
    }
const cancelBooking=async(req,res)=>{
      try{
        const {bookingId,roomId } = req.body;
        const bookingitem = await Booking.findOne({_id: bookingId}) 
        bookingitem.status='cancelled'
        await bookingitem.save();
        const room = await Room.findOne({_id:roomId})
        const bookings = room.currentbookings
        const temp=bookings.filter(booking=>booking.bookingid.toString()!==bookingId)
        console.log(temp);
        room.currentbookings=temp;
        await room.save()
        res.status(200).json('Booking deleted successfully')
      }
    catch(error)
    {
      res.status(400).json({ message: "Something went wrong" + error });  
    }
}
module.exports={bookRoom,getUserBookings,cancelBooking}