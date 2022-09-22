import { REGISTER_USER_FAIL, 
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGOUT_USER_FAIL,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS} from "../Constants/User";


export const registerUserReducer=(state={} ,action)=>
{
    switch(action.type)
    {
        case REGISTER_USER_REQUEST:
            return{
                loading:true
            }
        case REGISTER_USER_SUCCESS:
            return{loading:false,success:true,user:action.payload}
        case REGISTER_USER_FAIL:
            return {
                loading:false,error:action.payload
            }
    default: return state
    }
}



export const loginUserReducer=(state={} ,action)=>
{
    switch(action.type)
    {
        case LOGIN_USER_REQUEST:
            return{
                loading:true
            }
        case LOGIN_USER_SUCCESS:
            return{loading:false,success:true,user:action.payload}
        case LOGIN_USER_FAIL:
            return {
                loading:false,error:action.payload
            }
    default: return state
    }
}
export const logoutUserReducer=(state={} ,action)=>
{
    switch(action.type)
    {
        case LOGOUT_USER_REQUEST:
            return{
                loading:true
            }
        case LOGOUT_USER_SUCCESS:
            return{loading:false,success:true}
        case LOGOUT_USER_FAIL:
            return {
                loading:false,error:action.payload
            }
    default: return state
    }
}