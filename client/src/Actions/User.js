import axios from "axios";
import { REGISTER_USER_FAIL, 
        REGISTER_USER_REQUEST,
        REGISTER_USER_SUCCESS,
        LOGIN_USER_REQUEST,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAIL,
        LOGOUT_USER_FAIL,
        LOGOUT_USER_REQUEST,
        LOGOUT_USER_SUCCESS} from "../Constants/User";

export const registerUserAction=(user)=> async(dispatch,getState)=>
{
    try{
        dispatch({type:REGISTER_USER_REQUEST})
        const response= await axios.post("http://localhost:5000/api/users/register",{user});
        dispatch({type:REGISTER_USER_SUCCESS,payload:response.data})
        localStorage.setItem("userInfo",JSON.stringify(getState().registerUser.user));
        window.location.href="/"
    }
    catch(error)
    {
        dispatch({type:REGISTER_USER_FAIL,payload:error})
    }
    

}

export const loginUserAction=(user)=> async(dispatch,getState)=>
{
    try{
        dispatch({type:LOGIN_USER_REQUEST})
        const response= await axios.post("http://localhost:5000/api/users/login",user);
        dispatch({type:LOGIN_USER_SUCCESS,payload:response.data})
        localStorage.setItem("userInfo",JSON.stringify(getState().loginUser.user));
        window.location.href="/"
    }
    catch(error)
    {
        dispatch({type:LOGIN_USER_FAIL,payload:error})
    }
    

}

export const logoutUserAction=(user)=> async(dispatch,getState)=>
{
    try{
        dispatch({type:LOGOUT_USER_REQUEST})
        localStorage.removeItem("userInfo");
        console.log(getState().loginUser.user)
        dispatch({type:LOGOUT_USER_SUCCESS})
        window.location.href="/login"
    }
    catch(error)
    {
        dispatch({type:LOGOUT_USER_FAIL,payload:error})
    }
    

}
