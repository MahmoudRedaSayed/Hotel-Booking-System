import React, { useEffect , useState} from "react"
import {useDispatch,useSelector} from "react-redux"
import { FilterRoomsAction, getAllRoomsAction } from "../Actions/Room";
import Room from "../components/Room";
import Loader from "../components/Loader";
import Error from "../components/Error"
import moment from "moment";
import "antd/dist/antd.css"
import { DatePicker, Space } from "antd";
import AOS from 'aos';
import 'aos/dist/aos.css';
const { RangePicker } = DatePicker;

AOS.init();
export default function HomeScreen() {
    const [fromdate, setfromdate] = useState('');
    const [todate, settodate] = useState(''); 
    const [duplicatehotes, setduplicatehotes] = useState([]); 
    const [filterDate,setFilterDate]=useState(false);
    const [hotels,setHotels]=useState([]);
    const [searchKey,setSearchKey]=useState();
    const [type,setType]=useState();
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

  

    return error?<Error data="something go wrong"></Error>:
    <div className="container">
      <div className="bs rounded" style={{display:'flex',justifyContent:"center" ,alignItems:"center",marginTop:"20px",flexDirection:"column"}}>
      <div  style={{display:'flex',justifyContent:"center" ,alignItems:"center",gap:"15px"}}>
        <div className="col-md-4">
            <RangePicker style={{ height: "38px" }} onChange={filterByDate} format='DD-MM-YYYY' className='m-2'/>
          </div>
          <div className="col-md-4" >
            <input
              type="text"
              className="form-control i2 m-2"
              placeholder='Search Rooms'
              onChange={(e)=>{setSearchKey(e.target.value)}}
            />
          </div>
          <div className="col-md-4">
            <select className="form-control m-2"  onChange={(e)=>{setType(e.target.value)}} >

            <option value="all">All</option>
              <option value="Delux">Delux</option>
              <option value="Non-Delux">Non Delux</option>
              
            </select>
          </div>
          
          </div>
          <div>
            <button className="btn"  style={{color:"white",padding:"10px",margin:"10px"}} onClick={()=>{dispatch(FilterRoomsAction(searchKey,type)); }}>Filter</button>
          </div>
      </div>
          {loading?<Loader></Loader>:success?(<div  className="row justify-content-center"> 
                {!filterDate&&success&&(rooms.map(room=>(
                    <div key={room._id} data-aos='zoom-in' className="col-md-9">
                    {console.log("rooms")}
                <Room room={room} fromdate={fromdate} todate={todate}></Room>
                </div>)))}
                {filterDate&&(hotels.map(room=>(
                <div key={room._id} data-aos='zoom-in' className="col-md-9">
                    {console.log("hotels")}
                <Room room={room} fromdate={fromdate} todate={todate}></Room>
                </div>)))}
            </div>
        ):error?<Error data="something go wrong"></Error>:""}
      </div>
}