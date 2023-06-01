import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/UserContext'
import { allNotes } from '../../Api/Api'
import NoteCard from './NoteCard'
import axios from 'axios'

function AuthorNote() {

    const [allNote, setAllNote] = useState()
    const { loggedinUser } = useContext(UserContext)
  

    async function fetchAllNotes() {
        let response = await axios.get(allNotes + loggedinUser._id)
        console.log(response);
        setAllNote(response.data.notes)
    }
    useEffect(() => { fetchAllNotes() }, [])
  return (
    <>
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
</>
  )
}

export default AuthorNote