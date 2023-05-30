const userModel=require("../Models/userModel")
const bcrypt=require('bcrypt')

const signUp=async (req,res)=>{
    try {
        req.body.password=await bcrypt.hash(req.body.password,10)
let data=await userModel.create(req.body)
res.json({
    success:true,
    message:"User Registration successful"
})
console.log(req.body);
    } catch (error) {
        res.json({
            success:false,
            message:"Try again"
        })
        console.log(error);
    }
}


module.exports={signUp}