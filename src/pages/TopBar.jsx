import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

const TopBar = () => {
    return(
        <>
        <ul class="topBarDisp" style={{background:"blue", width:"100%", padding:"5px", borderColor:"black", borderStyle:"solid"}}>
            <li class="headerStats">Name</li>
            <li class="headerStats">Study Score</li>
            <li  class="headerNav"><Link to="/collection">Collection</Link></li>
            <li class="headerNav"><Link to="/gambling">Gamble!!!</Link></li>
            <li class="headerNav"><Link to="/myprofile" >Start Session</Link></li>
        </ul>
        <div><Outlet/></div>
        </>
    );
}

export default TopBar;