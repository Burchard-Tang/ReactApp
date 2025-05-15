import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { VerifyUser } from "../scripts/loadUser.js";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [linkCol, setLinkCol] = useState("white")
  const [butCol, setButCol] = useState("white")

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const CheckPass = async (e) => {
    e.preventDefault();

    if (name == "") {
      setMessage("No username!")
    } else if (password == "") {
      setMessage("No password!")
    }
    else {
      const success = await VerifyUser(name, password);

      console.log(success);

      if (success) {
        navigate("/myprofile");
      }
      else {
        console.log("issue");
      }
    }
  };

  return (
    <div style={{
      margin: "auto",
      marginTop: "10%",
      width: "500px",
      maxWidth: "50%",
      height: "500px",
      maxHeight: "70%",
      padding: "20px",
      textAlign: "center",
      border: "1px solid black",
      borderRadius: "50px",
      boxShadow: "3px 3px 2px rgba(0, 0, 0, 0.52)",
      backgroundColor: "var(--jet)",
      color: "white"
    }}>
      <div style={{
        width: "100%",
        height: "100%",
        borderRadius: "10%",
        border: "3px solid white",
        margin: "auto"
      }}>
        <h1 style={{
          width: "100%",
          textAlign: "center",
          fontSize: "50px",
          color: "white"
        }}>Title</h1>
        <form onSubmit={CheckPass} style={{

        }}>
          <input
            type="text"
            value={name}
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "10px",
              margin: "5px",
              width: "80%",
              fontSize: "20px",
              borderRadius: "5px",
              border: "1px solid white)",
              backgroundColor: "var(--raspberry)",
              color: "white"
            }}
          />
          <br />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              margin: "5px",
              width: "80%",
              fontSize: "20px",
              borderRadius: "5px",
              border: "1px solid white",
              backgroundColor: "var(--raspberry)",
              color: "white"
            }}
          />
          <style>{'::placeholder{ color: rgb(181, 181, 181); }'}</style>
          <br />
          <div style={{margin: "5px"}}>
            No account? <Link to="/createaccount" onMouseEnter={() => setLinkCol("lightblue")} onMouseLeave={() => setLinkCol("white")} style={{ color: linkCol }}>Create an account</Link>
          </div>
          <button type="submit" onMouseEnter={() => setButCol("lightblue")} onMouseLeave={() => setButCol("white")} style=
            {{
              margin: "10px",
              width: "100px",
              height: "30px",
              borderRadius: "15px",
              border: "1px solid white",
              backgroundColor: butCol
            }}>Submit</button>
        </form>
        <div style={{ color: "pink" }}>{message}</div>
      </div>
    </div>
  );
};

export default Login;