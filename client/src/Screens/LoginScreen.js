import React, { useState, useEffect } from "react";
import {useDispatch , useSelector} from 'react-redux'
import axios from "axios";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Swal from 'sweetalert2'
import { loginUserAction } from "../Actions/User";
export default function Loginscreen() {
  

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const dispatch=useDispatch();
    const {loading,error,user}=useSelector(state=>state.loginUser);

    useEffect(() => {

          if(localStorage.getItem('userInfo'))
          {
              window.location.href='/'
          }
        
    }, [])

    async function login(){
      const user={
        email,
        password
    }
        dispatch(loginUserAction(user));
    }

    return (
        <div className='login'>
         <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>

          {loading && (<Loader/>)} 
          {error && (<Error error='Invalid Credentials'/>)}
          <div>
            <input required type="text" placeholder="email" className="form-control mt-1" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            <input
              type="password"
              placeholder="password"
              className="form-control mt-1"
              value={password}
              required
              onChange={(e)=>{setpassword(e.target.value)}}
            />
            
            <button onClick={login} className="btn btn-success mt-3 mb-3 rounded-pill">LOGIN</button>
            <br/>
            <a style={{color:'black'}} href="/register" className="mt-2">Click Here To Register</a>
          </div>
        </div>
      </div>
        </div>
    )
}