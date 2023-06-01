import React, { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import {signUp} from "../../Api/Api"
import axios from 'axios'

import "./signup.css"
import Navbar from '../Navbr/Navbar'

function Signup() {

    const usernameRef=useRef()
    const emailRef=useRef()
    const passRef=useRef()
    const pass2Ref=useRef()

    const navigate=useNavigate()

    // Function for Signup

    
    async function userSignup(){
    if(passRef.current.value==pass2Ref.current.value){

      let newuser={
        username:usernameRef.current.value,
        email:emailRef.current.value,
        password:passRef.current.value
  
      }
      let response=await axios.post(signUp,newuser)
      navigate('/login')
    alert('Signup Success')
    }else{
      alert("Password Missmatch")
    }
  }
  return (
    <>
    <Navbar/>
    <div className="outerbox">
        <div className="contents">
          <h1>Signup</h1>
        <div className="inputs">
 
            <input type="text" name="username" id="username" className='input' placeholder='Username' ref={usernameRef}/><br />
            <input type="email" name="email" id="Email" className='input' placeholder='Email' ref={emailRef}/><br />
            <input type="password" name="password" id="pass" className='input' placeholder='Password' ref={passRef}/><br />
            <input type="password"  id="pass" className='input' placeholder='Confirm Password' ref={pass2Ref}/>
        </div>
        <div className="button">
            <button className="signup" onClick={userSignup}>Signup</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Signup