const NoteModel=require("../Models/noteModel")


// Add New Note

const createNote=async(req,res)=>{
    try{
        let data=await NoteModel.create(req.body)
        res.json({
            success:true,
            message:"Note added Successfully",
            data
        })
    }catch(error){
        res.json({
            success:false,
            message:"Note adding failed"
        })
        console.log(error);
    }

}

// View All Notes

const allNotes=async(req,res)=>{
    try{
        let allNote=await NoteModel.find(req.body)
        res.json({
            success:true,
            message:"All notes fetched",
            allNote
        })
    }catch(error){
        res.json({
            success:false,
            message:"can't fetch all notes"
        })
    }
}

// Get Single Note

const getSingleNote = async (req,res)=>{
    try{
        let singleNote=await NoteModel.findOne({_id:req.params.id})
        res.json({
            success:true,
            message:"got your blog",
            singleNote
        })
    }catch(error){
        res.json({
            success:false,
            message:"sorry it's an error"
        })

        console.log(error);
    }
}

// Edit Note

// const editNote=async(req,res)=>{
//     let edit=await NoteModel.findOneAndUpdate({_id:req.params.id})
//     try{
//         res.json({
//             success:true,
//             message:"edited successfully"
//         })
//     }catch(error){
//         res.json({
//             success:false,
//             message:"failed to edit"
//         })
//         console.log(error);
//     }
// }


// Delete Note

const deleteNote=async(req,res)=>{
    let delNote=await NoteModel.findOneAndDelete({_id:req.params.id})
    try{
        res.json({
            success:true,
            message:"deleted successfully"
        })
    }catch(error){
        res.json({
            success: false,
            message: "delete unsuccessful"
        })
    }
}


module.exports={createNote,allNotes,getSingleNote,deleteNote}