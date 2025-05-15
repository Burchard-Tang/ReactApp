import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const MakeUser = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8081/create", { name, password })
      .then(res => {
        console.log("Account created successfully:", res.data);
      })
      .catch(err => {
        console.error("Error creating account:", err);
      });
  };

  return (
    <>
      <h1>Create Account</h1>
      <form onSubmit={MakeUser}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <Link to="/home">Home</Link>
      </div>
    </>
  );
};

export default CreateAccount;