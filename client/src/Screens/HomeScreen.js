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
    const [duplicatehotes, setduplicatehotes] = useState([]); 
    const [filterDate,setFilterDate]=useState(false);
    const [hotels,setHotels]=useState([]);
    const {rooms,error,loading,success}=useSelector(state=>state.getAllRooms);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllRoomsAction())
    },[dispatch])
    function filterByDate(dates) {
        if(dates)
        {
        setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
        settodate(moment(dates[1]).format('DD-MM-YYYY'))
        var temp=[]
        for (var room of rooms) {
          var availability = false;
          
          for (var booking of room.currentbookings) {
            
            if(room.currentbookings.length)
            {
                console.log(!moment(moment(dates[0]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate))
                console.log(!moment(moment(dates[1]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate))
              if (
                !moment(moment(dates[0]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate) &&
                !moment(moment(dates[1]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate)
              ) {
                if (
                  moment(dates[0]).format('DD-MM-YYYY') !== booking.fromdate &&
                  moment(dates[0]).format('DD-MM-YYYY') !== booking.todate &&
                  moment(dates[1]).format('DD-MM-YYYY') !== booking.fromdate &&
                  moment(dates[1]).format('DD-MM-YYYY') !== booking.todate
                ) {
                  availability = true;
                }
              }
            }
            
            
          }
          if(availability || room.currentbookings.length==0) 
          {
            temp.push(room)
          }
          setHotels(temp)
          setFilterDate(true);
        }
    }
    else
    {
        setFilterDate(false)
    }
        
    }

    return loading?<Loader></Loader>:error?<Error data="something go wrong"></Error>:success?
    <div className="container">
        <div className="col-md-4">
            <RangePicker style={{ height: "38px" }} onChange={filterByDate} format='DD-MM-YYYY' className='m-2'/>
          </div>

            <div  className="row justify-content-center"> 
                {!filterDate&&success&&(rooms.map(room=>(
                    <div key={room._id} className="col-md-9">
                    {console.log("rooms")}
                <Room room={room} fromdate={fromdate} todate={todate}></Room>
                </div>)))}
                {filterDate&&(hotels.map(room=>(
                <div key={room._id} className="col-md-9">
                    {console.log("hotels")}
                <Room room={room} fromdate={fromdate} todate={todate}></Room>
                </div>)))}
            </div>
        </div>:""
}