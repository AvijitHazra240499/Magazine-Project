const mongoose=require("mongoose")

const bookSchema=new mongoose.Schema({
    types:{
     type:String,
     enum:["books","magazines"]
    },
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"author",
        required:true,
        trim:true    
    },
    title:{
    type:String,
    required:true,
    unique:true,
    trim:true
    },
    ISBN:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },

},{timestamps:true})

module.exports=mongoose.model("book",bookSchema)