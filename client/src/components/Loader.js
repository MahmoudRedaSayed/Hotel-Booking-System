import React from "react";
import HashLoader from "react-spinners/HashLoader";
export default function Loader(){
    return (
        <div className="sweet-loading" style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
      <HashLoader color={'#000'} loading={true} css='' size={80} />
    </div>
    )
}