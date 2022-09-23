import {combineReducers} from "redux"
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import { addRoomReducer, getAllRoomsReducer, getRoomByIdReducer } from "./Reducers/Room";
import { getAllUsersReducer, loginUserReducer, registerUserReducer } from "./Reducers/User";
import { bookingRoomReducer, cancelBookingReducer, getAllBookingsReducer, getUserBookingsReducer } from "./Reducers/Booking";
const finalReducer=combineReducers({
    getAllRooms:getAllRoomsReducer,
    getRoomById:getRoomByIdReducer,
    loginUser:loginUserReducer,
    registerUser:registerUserReducer,
    bookingRoom:bookingRoomReducer,
    getUserBookings:getUserBookingsReducer,
    cancelBooking:cancelBookingReducer,
    getAllBookings:getAllBookingsReducer,
    getAllUsers:getAllUsersReducer,
    addRoom:addRoomReducer,
})
const user=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null
const initialState={loginUser:{user}}
const composeEnhancers=composeWithDevTools({})
const Store=createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default Store;