import React from "react";
export default function NavBar(){
    return(
<nav className="navbar navbar-dark bg-dark navbar-expand-lg  shadow-lg p-3 mb-5  " style={{backgroundColor:"black"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">
        <a className="nav-link " aria-current="page" href="/login">Login</a>
        <a className="nav-link" href="register">register</a>
      </div>
    </div>
  </div>
</nav>
    )
}