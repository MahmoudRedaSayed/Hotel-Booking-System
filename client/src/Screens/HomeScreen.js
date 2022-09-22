import React, { useEffect , useState} from "react"
import {useDispatch,useSelector} from "react-redux"
import { getAllRoomsAction } from "../Actions/Room";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error"
import moment from "moment";
import "antd/dist/antd.css"
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
export default function HomeScreen() {
    const [fromdate, setfromdate] = useState('');
    const [todate, settodate] = useState('');  
    const {rooms,error,loading,success}=useSelector(state=>state.getAllRooms);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllRoomsAction())
    },[dispatch])
    function filterByDate(dates) {
        setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
        settodate(moment(dates[1]).format('DD-MM-YYYY'))}

    return loading?<Loader></Loader>:error?<Error data="something go wrong"></Error>:success?
    <div className="container">
        <div className="col-md-4">
            <RangePicker style={{ height: "38px" }} onChange={filterByDate} format='DD-MM-YYYY' className='m-2'/>
          </div>

            <div  className="row justify-content-center"> 
                {success&&(rooms.map(room=>(
                <div key={room._id} className="col-md-9">
                <Room room={room} fromdate={fromdate} todate={todate}></Room>
                </div>)))}
            </div>
        </div>:""
}