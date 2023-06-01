import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { editNote } from '../../Api/Api'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Navbar from "../Navbr/Navbar"

import "./editnote.css"

function EditNote() {

    const [newtitle, setnewtitle] = useState({})
    const [newcontent, setnewcontent] = useState({})
   
    const location = useLocation()
    let navigate = useNavigate()
    useEffect(() => {
        setnewtitle(location.state.title)
        setnewcontent(location.state.content)
    }, [])

    async function editData() {
        let newData = {
            title: newtitle,
            content: newcontent
        };
        const response = await axios.patch(editNote + location.state._id, newData)
    
        navigate('/notes')
    }
  return (
    <>
    <Navbar />
            <div className='editmain'>
                    <h1>EDIT YOUR NOTE</h1>
                <div className="inputs-edit">

                    <TextField id="standard-basic" label="Title" variant="standard" value={newtitle} onChange={(e) => { setnewtitle(e.target.value) }} /><br />
                    <TextField id="standard-basic" label="Content" variant="standard" row={5} value={newcontent} onChange={(e) => { setnewcontent(e.target.value) }} /><br /><br />
                </div>
                <div className="buttons-edit">
                <Button variant="contained" className='btn' onClick={editData}>Submit</Button>
                </div>

            </div>
            </>
  )
}

export default EditNote