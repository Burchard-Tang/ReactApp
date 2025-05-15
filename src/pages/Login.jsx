import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8008/users')
        .then(res => res.json())
        .then(data => setData(data))
        .then(err => console.log(err))
    },[])

    return(
        <>
            <h1>Login</h1>
            <div><Link to="/createaccount">createaccount</Link></div>
            <Link to="/myprofile">home</Link>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                    <th>NAME</th>
                    <th>PASSWORD</th>
                    <th>POINTS</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d,i)=>(
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.password}</td>
                            <td>{d.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Login;