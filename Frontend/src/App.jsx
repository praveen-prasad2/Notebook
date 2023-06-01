import { useState } from 'react'

import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserProvider from "./Components/Context/UserContext";
import UserRoute from './Components/Private Route/UserRoute';

import Signup from './Components/SIgnup/Signup';
import Signin from './Components/SIgnin/Signin'
import AddNote from './Components/Add Note/AddNote';
import AuthorNote from './Components/Notes/AuthorNote';
import EditNote from './Components/Edit Note/EditNote';


function App() {


  return (
    <UserProvider>
      
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Signin />}/>
    <Route path="signup" element={<Signup />}/>
    <Route path="addnote" element={<UserRoute><AddNote /></UserRoute>} />
    <Route path="notes" element={<UserRoute><AuthorNote /></UserRoute>}/>
    <Route path="editnote" element={<EditNote />}/>
   </Routes>
   </BrowserRouter>

   </UserProvider>
  )
}

export default App
