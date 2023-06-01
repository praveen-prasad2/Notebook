import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { signIn } from "../../Api/Api";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css"
import Navbar from "../Navbr/Navbar";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()

  const { SetloggedinUser } = useContext(UserContext);

  // Function for Signin

  async function userLogin() {
    
    let response = await axios.post(signIn, {
      email,
      password,
    });
    console.log(response.data);

    if (response.data.success == true) {
      SetloggedinUser(response.data.user);
      window.localStorage.setItem("loggedinuser", JSON.stringify(response.data.user));
      navigate("/notes")
      alert("Login success");
    } else {
      alert("Login Error");
    }
  }

  return (
    <>
    <Navbar/>
    <div className="wrapper">
      <h1>Signin</h1>
      <div className="login-inputs">
        <input
          type="email"
          name="email"
          id="Email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          id="pass"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
      </div>
      <div className="login-button">
        <button className="login-btn" onClick={userLogin}>
          Login
        </button>
        <p>Not a member?<Link to="/signup">Signup Now</Link></p>
      </div>
    </div>
    </>
  );
}

export default Signin;