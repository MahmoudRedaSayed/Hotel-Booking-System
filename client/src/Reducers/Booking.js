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
export const bookingRoomReducer=(state={} ,action)=>
{
    switch(action.type)
    {
        case BOOKING_ROOM_REQUEST:
            return{
                loading:true
            }
        case BOOKING_ROOM_SUCCESS:
            return{loading:false,success:true}
        case BOOKING_ROOM_FAIL:
            return {
                loading:false,error:action.payload
            }
    default: return state
    }
}

export const getUserBookingsReducer=(state={} ,action)=>
{
    switch(action.type)
    {
        case GET_USER_BOOKINGS_REQUEST:
            return{
                loading:true
            }
        case GET_USER_BOOKINGS_SUCCESS:
            return{loading:false,success:true,bookings:action.payload}
        case GET_USER_BOOKINGS_FAIL:
            return {
                loading:false,error:action.payload,success:false
            }
    default: return state
    }
}

export const cancelBookingReducer=(state={} ,action)=>
{
    switch(action.type)
    {
        case CANCEL_BOOKING_REQUEST:
            return{
                loading:true
            }
        case CANCEL_BOOKING_SUCCESS:
            return{loading:false,success:true}
        case CANCEL_BOOKING_FAIL:
            return {
                loading:false,error:action.payload,success:false
            }
    default: return state
    }
}

