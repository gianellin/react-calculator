//Display the calculated values
//react-textfit is a library that will shrink the output -
    //  display output will resize on lenght + so it was installed.

import React from "react";
import {Textfit} from "react-textfit";
import "./Screen.css";

function Screen ({ value }) {
    return (
        <Textfit className="screen" mode="single" max={60}>
            { value }
        </Textfit>
    )
}

export default Screen;