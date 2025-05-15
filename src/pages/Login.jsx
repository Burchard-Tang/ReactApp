import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const CheckPass = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8081/users", { name, password })
      .then(res => {
        navigate('/myprofile');
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={CheckPass}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <Link to="/createaccount">Create Account</Link>
      </div>
      <Link to="/myprofile">Home</Link>
    </>
  );
};

export default Login;