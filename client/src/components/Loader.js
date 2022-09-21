import React from "react";
export default function Loader(){
    return (
        <div class="spinner-border text-danger" role="status" style={{height:"80px",width:"80px"}}>
            <span class="sr-only">Loading...</span>
        </div>
    )
}