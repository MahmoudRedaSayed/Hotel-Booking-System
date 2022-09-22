import {
    BOOKING_ROOM_REQUEST,
    BOOKING_ROOM_SUCCESS,
    BOOKING_ROOM_FAIL
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