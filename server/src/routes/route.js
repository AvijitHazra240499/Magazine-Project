const express=require("express")
const router=express.Router()
const{createauthor}=require("../controllers/authorController")
const {createbook,getbooks}=require("../controllers/bookController")
//------------author----------------------
router.post("/author",createauthor)
// -----------------------book--------------
router.post("/book",createbook)
router.get("/getbooks",getbooks)

module.exports=router