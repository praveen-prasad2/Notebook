import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import Signin from '../SIgnin/Signin'


function UserRoute({children}) {

    const {loggedinUser}=useContext(UserContext)
  return (
   <>
{
    loggedinUser ? children : <Signin />
}

   </>
  )
}

export default UserRoute