import React , {useState, useEffect} from "react";
import { Tabs } from "antd";
import axios from "axios";
import Swal from "sweetalert2";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
import { Tag, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookingsAction } from "../Actions/Booking";
import { addRoomsAction, getAllRoomsAction } from "../Actions/Room";
import { getAllUsersAction } from "../Actions/User";



const { TabPane } = Tabs;
function Adminscreen() {
    const {user} = useSelector(state=>state.loginUser);
    return (
    <div className="ml-3">
        <h2 className="text-center m-2" style={{ fontSize: "35px" }}>Admin Panel</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Bookings" key="1">
          <div className="row">
            <Bookings/>
          </div>
        </TabPane>
        <TabPane tab="Rooms" key="2">
        
            <div className="row">
               <Rooms/>
            </div>
         
        </TabPane>
        <TabPane tab="Add Room" key="3">
         
            
                 <Addroom/>
        
          
        </TabPane>
        <TabPane tab="Users" key="4">
      
            <Users/>
      
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Adminscreen;

export function Bookings() {
  const dispatch=useDispatch();
  const {error,success,loading,bookings}=useSelector(state=>state.getAllBookings)
  useEffect( () => {
        dispatch(getAllBookingsAction())
  }, [dispatch]);
    return (
        <div className='col-md-11'>
            <h1>Bookings</h1>
            {loading ? (<Loader/>) : error ? (<Error/>) :success? (<div>

                   <table className='table table-bordered table-dark'>
                       <thead className='bs'>
                           <tr>
                               <th>Booking Id</th>
                               <th>Userid</th>
                               <th>Room</th>
                               <th>From</th>
                               <th>To</th>
                               <th>Status</th>
                           </tr>
                       </thead>
                       <tbody>
                           {bookings.map(booking=>{
                               return <tr>
                                   <td>{booking._id}</td>
                                   <td>{booking.userid}</td>
                                   <td>{booking.room}</td>
                                   <td>{booking.fromdate}</td>
                                   <td>{booking.todate}</td>
                                   <td>{booking.status}</td>
                               </tr>
                           })}
                       </tbody>
                   </table>

            </div>):""}
        </div>
    )
}


export function Rooms() {
  const dispatch=useDispatch();
  const {error,rooms,success,loading}=useSelector(state=>state.getAllRooms)
  useEffect( () => {
    dispatch(getAllRoomsAction());
  }, []);
    return (
        <div className='col-md-11'>
            <h1>Rooms</h1>
            {loading ? (<Loader/>) : error ? (<Error/>) :success? (<div>

                   <table className='table table-bordered table-dark'>
                       <thead className='bs'>
                           <tr>
                               <th>Room Id</th>
                               <th>Name</th>
                               <th>Type</th>
                               <th>Rent Per day</th>
                               <th>Max Count</th>
                               <th>Phone Number</th>
                           </tr>
                       </thead>
                       <tbody>
                           {rooms.map(room=>{
                               return <tr>
                                   <td>{room._id}</td>
                                   <td>{room.name}</td>
                                   <td>{room.type}</td>
                                   <td>{room.rentperday}</td>
                                   <td>{room.maxcount}</td>
                                   <td>{room.phonenumber}</td>
                               </tr>
                           })}
                       </tbody>
                   </table>

            </div>):""}
        </div>
    )
}



export function Users(){
  const dispatch=useDispatch();
  const {loading,success,users,error}=useSelector(state=>state.getAllUsers)

  useEffect(() => {
    dispatch(getAllUsersAction())
  }, [dispatch])

  return(
    loading? (<Loader/>):error?<Error></Error>:success?
    <div className='row'>
       <div className="col-md-10">
       <table className='table table-bordered table-dark'>
           <thead className='bs'>
             <tr>
               <th>Id</th>
               <th>Name</th>
               <th>Email</th>
               <th>isAdmin</th>
             </tr>
           </thead>
         
         <tbody>

        

          {(users?.map(user=> (<tr>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.Admin ? 'YES' : 'NO'}</td>
            </tr>
          )))}
           </tbody>
          </table>
       </div>
    </div>:""
  )

}


export function Addroom() {
  const [room, setroom] = useState("");
  const [rentperday, setrentperday] = useState();
  const [maxcount, setmaxcount] = useState();
  const [description, setdescription] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [type, settype] = useState("");
  const [image1, setimage1] = useState("");
  const [image2, setimage2] = useState("");
  const [image3, setimage3] = useState("");
  const dispatch=useDispatch();
  async function addRoom()
  {
      const roomobj = {
          name:room , 
          rentperday, maxcount ,description ,phonenumber ,type ,image1 ,image2 ,image3
      }
      dispatch(addRoomsAction(roomobj));
  }
  return (
    <div className="row">
     
        <div className="col-md-5">
          <input
            type="text"
            className="form-control mt-1"
            placeholder="name"
            value={room}
            onChange={(e) => {
              setroom(e.target.value);
            }}
          />

          <input
            type="text"
            className="form-control mt-1"
            placeholder="rentperday"
            value={rentperday}
            onChange={(e) => {
              setrentperday(e.target.value);
            }}
          />

          <input
            type="text"
            className="form-control mt-1"
            placeholder="maxcount"
            value={maxcount}
            onChange={(e) => {
              setmaxcount(e.target.value);
            }}
          />

          <input
            type="text"
            className="form-control mt-1"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />

          <input
            type="text"
            className="form-control mt-1"
            placeholder="phonenumber"
            value={phonenumber}
            onChange={(e) => {
              setphonenumber(e.target.value);
            }}
          />
          
        </div>

        <div className="col-md-6">
        <input
            type="text"
            className="form-control mt-1"
            placeholder="type"
            value={type}
            onChange={(e) => {
              settype(e.target.value);
            }}
          />
        <input
            type="text"
            className="form-control mt-1"
            placeholder="Image url 1"
            value={image1}
            onChange={(e) => {
              setimage1(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Image url 2"
            value={image2}
            onChange={(e) => {
              setimage2(e.target.value);
            }}
          />
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Image url 3"
            value={image3}
            onChange={(e) => {
              setimage3(e.target.value);
            }}
          />
          <div className='mt-1 text-right'>
          <button className="btn btn-primary" onClick={addRoom}>ADD ROOM</button>
          </div>
        </div>
     
    </div>
  );
}
