import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

import { deleteNote } from '../../Api/Api';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


function NoteCard({notemap}) {

    const navigate=useNavigate()

    async function del() {
        await axios.delete(deleteNote + notemap._id)
        window.location.replace("http://localhost:5173/notes")
    }

    async function noteEdit(){
        navigate("/editnote",{state:notemap})
    }
  return (
    <>
    <div className="card-outline">
        <div className="card-heading">
        <h1>{notemap.title}</h1>
        </div>
        <div className="card-content">
            <p>{notemap.content}</p>
        </div>
        <div className="card-buttons">
        <DeleteIcon  onClick={del} />
        <EditIcon  onClick={noteEdit}/>
        </div>
    </div>
    </>
  )
}

export default NoteCard