import axios from "axios";
import { REGISTER_USER_FAIL, 
        REGISTER_USER_REQUEST,
        REGISTER_USER_SUCCESS,
        LOGIN_USER_REQUEST,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAIL,
        GET_ALL_USERS_REQUEST,
        GET_ALL_USERS_SUCCESS,
        GET_ALL_USERS_FAIL,
        LOGOUT_USER_FAIL,
        LOGOUT_USER_REQUEST,
        LOGOUT_USER_SUCCESS} from "../Constants/User";
import Swal from 'sweetalert2'


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


export const getAllUsersAction=()=>async(dispatch,getState)=>{
    
    try{
        const user=getState().loginUser.user;
        if(user.Admin)
        {
            dispatch({type:GET_ALL_USERS_REQUEST})
            const config={
                headers: {
                    Authorization:`${user.Admin}`,
                  }
            }
            const response=await axios.get(`http://localhost:5000/api/users`,config)
            dispatch({type:GET_ALL_USERS_SUCCESS,payload:response.data})
        }
        else
        {
            Swal.fire('Oops', 'Something went wrong ,you haven\' the access to this page', 'error')
            dispatch({type:GET_ALL_USERS_FAIL})
        }
    }
    catch(error)
    {
        dispatch({type:GET_ALL_USERS_FAIL,payload:error})
        Swal.fire('Oops', 'Something went wrong , please try later', 'error')

    }
}
