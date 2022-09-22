import {combineReducers} from "redux"
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import { getAllRoomsReducer, getRoomByIdReducer } from "./Reducers/Room";
import { loginUserReducer, registerUserReducer } from "./Reducers/User";
import { bookingRoomReducer } from "./Reducers/Booking";
const finalReducer=combineReducers({
    getAllRooms:getAllRoomsReducer,
    getRoomById:getRoomByIdReducer,
    loginUser:loginUserReducer,
    registerUser:registerUserReducer,
    bookingRoom:bookingRoomReducer,
})
const user=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null
const initialState={loginUser:{user}}
const composeEnhancers=composeWithDevTools({})
const Store=createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default Store;