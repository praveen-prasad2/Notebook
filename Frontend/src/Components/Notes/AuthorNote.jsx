import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import { allNotes } from '../../Api/Api'
import NoteCard from './NoteCard'
import axios from 'axios'
import Navbar from '../Navbr/Navbar'
import AddIcon from '@mui/icons-material/Add';




import "./authornote.css"
import { Link } from 'react-router-dom'

function AuthorNote() {


    const [allNote, setAllNote] = useState()
    const { loggedinUser } = useContext(UserContext)

    
    // Fetching Notes from API 
  

    async function fetchAllNotes() {
        let response = await axios.get(allNotes + loggedinUser._id)
        console.log(response);
        setAllNote(response.data.notes)
    }
    useEffect(() => { fetchAllNotes() 
}, [])
  return (
    <>
    <Navbar/>
    <div className='main'>
        <div className='authorcontainer' >

            {allNote && allNote.map((note) => {
                return (
              
                       
                        <div>
                            <NoteCard notemap={note} />
                        </div>
                    
                )
            })}
        </div>
    </div>
    

<Link to="/addnote">
    <button className="add-new-note">Add Note <AddIcon/></button>
</Link>
</>
  )
}

export default AuthorNote