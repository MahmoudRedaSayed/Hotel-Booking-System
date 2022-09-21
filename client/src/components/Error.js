import React from "react";
export default function Error({data}){
    return <div className="alert alert-danger" role="alert">
    {data}
  </div>
} 