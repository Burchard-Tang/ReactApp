import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";

const TopBar = () => {
    return(
        <>
        <h1>TopBar</h1>
        <div><Outlet/></div>
        </>
    );
}

export default TopBar;