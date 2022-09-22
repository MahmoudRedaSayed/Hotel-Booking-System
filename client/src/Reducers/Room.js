import {
    GET_ALL_ROOMS_REQUEST,
    GET_ALL_ROOMS_SUCCESS,
    GET_ALL_ROOMS_FAIL,
    FILTER_ROOMS_REQUEST,
    FILTER_ROOMS_SUCCESS,
    FILTER_ROOMS_FAIL,
    GET_ROOM_BY_ID_REQUEST,
    GET_ROOM_BY_ID_SUCCESS,
    GET_ROOM_BY_ID_FAIL
} from "../Constants/Room";
export const  getAllRoomsReducer=(state={},action)=>{
    switch(action.type)
    {
        case GET_ALL_ROOMS_REQUEST:
            return{
                loading:true
            }
        case GET_ALL_ROOMS_SUCCESS:
        return{
            loading:false,
            success:true,
            rooms:action.payload
        }
        case GET_ALL_ROOMS_FAIL:
            return{
                loading:false,
                error:action.payload,
                success:false
            }
        default: return state;
    }

}


export const  getRoomByIdReducer=(state={},action)=>{
    switch(action.type)
    {
        case GET_ROOM_BY_ID_REQUEST:
            return{
                loading:true
            }
        case GET_ROOM_BY_ID_SUCCESS:
        return{
            loading:false,
            success:true,
            room:action.payload
        }
        case GET_ROOM_BY_ID_FAIL:
            return{
                loading:false,
                error:action.payload,
                success:false
            }
        default: return state;
    }

}