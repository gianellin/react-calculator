import "./Wrapper.css";
import React from "react";


// this will be the calculator frame
function Wrapper ({children}) {
    return (
    <div className="wrapper">{children}</div>
    )
};


export default Wrapper;