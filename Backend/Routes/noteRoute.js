const express =require("express")
const  router=express.Router()

const {signUp, signIn}=require("../Controllers/userController")

router.post("/signup",signUp)  // Route for signup
router.get("/signin",signIn)  // Route for login

module.exports=router