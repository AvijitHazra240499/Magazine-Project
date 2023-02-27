const mongoose=require("mongoose")

const authorSchema=new mongoose.Schema({
   firstname:{
    type:String,
    required:true,
    trim:true
   },
   lastname:{
    type:String,
    required:true,
    trim:true
   },
   email:{
    type:String,
    required:true,
    unique:true,
    trim:true
   },
  

},{timestamps:true})
module.exports=mongoose.model("author",authorSchema)