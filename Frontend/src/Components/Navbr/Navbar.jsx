import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext';

import "./navbar.css"

function Navbar() {

  const { loggedinUser } = useContext(UserContext);


  return (
    <>
      <div className="navbar">
        <div className="head">
          <h1>
            <img src="" alt="" /> Notebook
          </h1>
        </div>
        <div className="options">
          <Link to="/">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Resources</Link>
          {loggedinUser ? (
            <Link to="/notes">Notes</Link>) : (
            <Link to="/login">Notes</Link>)}{" "}
          <br />
          <br />
          <Link to="#contact">Contact</Link>
         
         
        </div>
      </div>
     
    </>
  )
}

export default Navbar