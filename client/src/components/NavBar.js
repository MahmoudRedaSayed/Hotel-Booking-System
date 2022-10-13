import React, { useReducer } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { logoutUserAction } from "../Actions/User";
export default function NavBar(){
  const {user}=useSelector(state=>state.loginUser);
  const dispatch=useDispatch();
    return(
<nav className="navbar navbar-dark bg-dark navbar-expand-lg  shadow-lg p-3  " style={{backgroundColor:"black"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">AlgoPhobia</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">
        {
          !user?(<><a className="nav-link " aria-current="page" href="/login">Login</a>
          <a className="nav-link" href="/register">register</a></>):(<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="fa fa-user" aria-hidden="true"></i>  {user.name}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li> <a className="dropdown-item" href="/profile">Profile</a></li>
    {user.Admin&&<li> <a className="dropdown-item" href="/admin">Admin panel</a></li>}
    <li><a className="dropdown-item"  onClick={()=>{dispatch(logoutUserAction())}}>Logout</a></li>
  </ul>
</div>)
             
        }
        
      </div>
    </div>
  </div>
</nav>
    )
}