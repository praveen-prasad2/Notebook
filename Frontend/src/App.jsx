import { useState } from 'react'

import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserProvider from "./Components/Context/UserContext";


import Signup from './Components/SIgnup/Signup';
import Signin from './Components/SIgnin/Signin'
import AddNote from './Components/Add Note/AddNote';


function App() {


  return (
    <UserProvider>
      
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Signin />}/>
    <Route path="signup" element={<Signup />}/>
    <Route path="addnote" element={<AddNote />}/>
   </Routes>
   </BrowserRouter>

   </UserProvider>
  )
}

export default App
