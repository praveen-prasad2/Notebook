const express =require("express")
const  router=express.Router()

const {signUp}=require("../Controllers/userController")

router.post("/signup",signUp)  // Route for signup

module.exports=router