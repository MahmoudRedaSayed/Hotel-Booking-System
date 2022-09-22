import React from "react";
export default function Loader(){
    return (
        <div className="spinner-border text-danger" role="status" style={{height:"80px",width:"80px"}}>
            <span className="sr-only"></span>
        </div>
    )
}