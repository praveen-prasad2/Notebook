const express =require("express")
const  router=express.Router()

const {signUp, signIn}=require("../Controllers/userController")
const {createNote,getAuthorNotes, getSingleNote, deleteNote,editNote}=require("../Controllers/noteController")

router.post("/signup",signUp)  // Route for signup
router.post("/signin",signIn)  // Route for login

router.post("/createnote",createNote) // Route for new note
router.get("/allnotes/:id",getAuthorNotes)  // Route for all notes

router.get("/singlenote/:id",getSingleNote)  // Route for single note
router.patch("/editnote/:id",editNote)   // Route for Edit Note

router.delete("/deletenote/:id",deleteNote) // Route for note deletion

module.exports=router