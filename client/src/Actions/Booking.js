import {
    BOOKING_ROOM_REQUEST,
    BOOKING_ROOM_SUCCESS,
    BOOKING_ROOM_FAIL,
    CANCEL_BOOKING_REQUEST,
    CANCEL_BOOKING_SUCCESS,
    CANCEL_BOOKING_FAIL,
    GET_USER_BOOKINGS_REQUEST,
    GET_USER_BOOKINGS_SUCCESS,
    GET_USER_BOOKINGS_FAIL
} from "../Constants/Booking"
import axios from "axios";
import Swal from 'sweetalert2'
import { json } from "react-router-dom";
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

export const getUserBookingsAction=()=>async(dispatch,getState)=>{
    const user=getState().loginUser.user;

    try{
        dispatch({type:GET_USER_BOOKINGS_REQUEST})
        console.log("hererr")
        const response=await axios.get(`http://localhost:5000/api/bookings/${user._id}`)
        dispatch({type:GET_USER_BOOKINGS_SUCCESS,payload:response.data})
    }
    catch(error)
    {
        dispatch({type:GET_USER_BOOKINGS_SUCCESS,payload:error})
        Swal.fire('Oops', 'Something went wrong , please try later', 'error')
    }
}


export const cancelBookingAction=(bookingId,roomId)=>async(dispatch,getState)=>{

    try {
        const user=getState().loginUser.user;
            dispatch({type:CANCEL_BOOKING_REQUEST})
              const result = await axios.put('http://localhost:5000/api/bookings' , {bookingId , userId:user._id, roomId});
              dispatch({type:CANCEL_BOOKING_SUCCESS})
              Swal.fire('Congrats' , 'Your Room has cancelled succeessfully' , 'success')
              dispatch(getUserBookingsAction())
            } catch (error) {
              dispatch({type:CANCEL_BOOKING_FAIL})
              Swal.fire('Oops' , 'Something went wrong' , 'error')
            }

}
