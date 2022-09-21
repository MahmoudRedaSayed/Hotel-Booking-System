import {combineReducers} from "redux"
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import { getAllRoomsReducer } from "./Reducers/Room";
const finalReducer=combineReducers({
    getAllRooms:getAllRoomsReducer
})
const initialState={}
const composeEnhancers=composeWithDevTools({})
const Store=createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default Store;