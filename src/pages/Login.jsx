import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    return(
        <>
            <h1>Login</h1>
            <div><Link to="/createaccount">createaccount</Link></div>
            <Link to="/home">home</Link>
        </>
    );
}

export default Login;