import {
    GET_ALL_ROOMS_REQUEST,
    GET_ALL_ROOMS_SUCCESS,
    GET_ALL_ROOMS_FAIL
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