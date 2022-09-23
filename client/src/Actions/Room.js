import axios from "axios"
import {
    GET_ALL_ROOMS_REQUEST,
    GET_ALL_ROOMS_SUCCESS,
    GET_ALL_ROOMS_FAIL,
    ADD_ROOM_REQUEST,
    ADD_ROOM_SUCCESS,
    ADD_ROOM_FAIL,
    FILTER_ROOMS_REQUEST,
    FILTER_ROOMS_SUCCESS,
    FILTER_ROOMS_FAIL,
    GET_ROOM_BY_ID_REQUEST,
    GET_ROOM_BY_ID_SUCCESS,
    GET_ROOM_BY_ID_FAIL
} from "../Constants/Room";
import Swal from 'sweetalert2'

export const getAllRoomsAction=()=>async(dispatch,getState)=>{
    try{
        dispatch({type:GET_ALL_ROOMS_REQUEST})
        const response=await axios.get("http://localhost:5000/api/rooms");
        dispatch({type:GET_ALL_ROOMS_SUCCESS,payload:response.data})
    }
    catch(error)
    {
        dispatch({type:GET_ALL_ROOMS_FAIL,payload:error})
    }
}

export const getRoomByIdAction=(id)=>async(dispatch,getState)=>{
    try{
        dispatch({type:GET_ROOM_BY_ID_REQUEST})
        console.log("here")
        const response=await axios.get(`http://localhost:5000/api/rooms/${id}`);
        console.log(response)
        dispatch({type:GET_ROOM_BY_ID_SUCCESS,payload:response.data})
    }
    catch(error)
    {
        dispatch({type:GET_ROOM_BY_ID_FAIL,payload:error})
    }
}

export const FilterRoomsAction=(searchKey,type)=>async(dispatch,getState)=>{
    try{
        dispatch({type:GET_ALL_ROOMS_REQUEST})

        const response=await axios.post("http://localhost:5000/api/rooms",{searchKey,type});
        dispatch({type:GET_ALL_ROOMS_SUCCESS,payload:response.data})
    }
    catch(error)
    {
        dispatch({type:GET_ALL_ROOMS_FAIL,payload:error})
    }
}


export const addRoomsAction=(room)=>async(dispatch,getState)=>{
    try{
        const user=getState().loginUser.user;
        if(user.Admin)
        {
            dispatch({type:ADD_ROOM_REQUEST})
            const config={
                headers: {
                    Authorization:`${user.Admin}`,
                  }
            }
    
            const response=await axios.post("http://localhost:5000/api/rooms",{room},config);
            dispatch({type:ADD_ROOM_SUCCESS,payload:response.data})
            Swal.fire('Congrats' , 'Your Room is added succeessfully' , 'success')
            dispatch(getAllRoomsAction());
        }
        else
        {
            Swal.fire('Oops', 'Something went wrong ,you haven\' the access to this page', 'error')
            dispatch({type:ADD_ROOM_FAIL})
        }
    }
    catch(error)
    {
        dispatch({type:ADD_ROOM_FAIL,payload:error})
        Swal.fire('Oops', 'Something went wrong , please try later', 'error')
    }
}