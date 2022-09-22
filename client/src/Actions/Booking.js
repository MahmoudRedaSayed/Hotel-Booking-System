import {
    BOOKING_ROOM_REQUEST,
    BOOKING_ROOM_SUCCESS,
    BOOKING_ROOM_FAIL
} from "../Constants/Booking"
import axios from "axios";
import Swal from 'sweetalert2'
export const bookingRoomAction=(bookingDetails)=>async(dispatch,getState)=>{
    const user=getState().loginUser.user;

    try{
        dispatch({type:BOOKING_ROOM_REQUEST})
        const response=await axios.post("http://localhost:5000/api/bookings",bookingDetails)
        dispatch({type:BOOKING_ROOM_SUCCESS})
        Swal.fire('Congrats', 'Your Room has booked succeessfully', 'success').then(result => {
            window.location.href = '/profile'})
    }
    catch(error)
    {
        dispatch({type:BOOKING_ROOM_SUCCESS,payload:error})
        Swal.fire('Oops', 'Something went wrong , please try later', 'error')
    }
}