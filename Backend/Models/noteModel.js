const mongoose =require ('mongoose')

const noteSchema=new mongoose.Schema({
    title:{type:String,maxLength:50},
    content:{type:String},
    authorid:{type:String,maxLength:100},
    authorname:{type:String,maxLength:50},
    dateposted:{type:String,maxLength:50},
})

const NoteModel=mongoose.model('blog',noteSchema)

module.exports=NoteModel