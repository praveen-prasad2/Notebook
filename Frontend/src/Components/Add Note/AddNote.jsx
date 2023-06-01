import React, { useContext, useRef } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { createNote } from '../../Api/Api';
import axios from 'axios';
import Navbar from "../Navbr/Navbar"

import "./addnote.css"

function AddNote() {

    const { loggedinUser } = useContext(UserContext)
    let navigate = useNavigate()

    const titleref = useRef()
    const contentref = useRef()

    async function createNewNote(){
        let note= {
            title: titleref.current.value,
            content: contentref.current.value,
            authorid: loggedinUser._id,
            authorname: loggedinUser.username,
            dateposted: new Date()
        }
        let res = await axios.post(createNote, note)

        if (res.data.success == true) {
            navigate('/notes')
            alert("Note added successfully")
        } else {
            alert("invalid")
        }
    }

  return (
  <>
  <Navbar />
  <div className="outer-container">
    <h1>ADD NEW NOTE</h1>
    <div className="inputs-addnote">
    <TextField id="outlined-basic" label="Title" variant="outlined" inputRef={titleref}/><br /> <br />
    <TextField
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={4}
        inputRef={contentref}
        /> <br /> <br />
    </div>
    <div className="buttons-addnote">
    <Button className='add-note' variant="contained" onClick={createNewNote}>Save</Button>
    </div>
  </div>
  </>
  )
}

export default AddNote