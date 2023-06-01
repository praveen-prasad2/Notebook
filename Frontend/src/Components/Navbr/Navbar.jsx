import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="head">
          <h1>
            <img src="/images/titleicon.png" alt="" /> BLOG
          </h1>
        </div>
        <div className="options">
          <Link to="/">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Resources</Link>
          {/* {loggedinUser ? (
            <Link to="/authorblog">Your Posts</Link>) : (
            <Link to="/login">Your Posts</Link>)}{" "} */}
          <br />
          <br />
          <Link to="#contact">Contact</Link>
         
          {/* {loggedinUser ? (
            <Signout />
          ) : (
            <button className="login" onClick={handleToggle}>
              Signin{" "}
            </button>
          )} */}
        </div>
      </div>
     
    </>
  )
}

export default Navbar