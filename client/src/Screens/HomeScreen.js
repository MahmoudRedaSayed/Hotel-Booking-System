import React, { useEffect } from "react"
import {useDispatch,useSelector} from "react-redux"
import { getAllRoomsAction } from "../Actions/Room";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error"
export default function HomeScreen() {
    const {rooms,error,loading,success}=useSelector(state=>state.getAllRooms);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllRoomsAction())
    },[dispatch])
    return loading?<Loader></Loader>:error?<Error data="something go wrong"></Error>:success?<div className="container">
            <div  className="row justify-content-center"> 
                {success&&(rooms.map(room=>(
                <div key={room._id} className="col-md-9">
                <Room room={room}></Room>
                </div>)))}
            </div>
        </div>:""
}