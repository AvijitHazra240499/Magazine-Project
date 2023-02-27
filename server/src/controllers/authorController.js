const authorModel=require("../model/authorModel")
const {isValid,isValidbody,emailRegex}=require("../validator/validator")

const createauthor=async(req,res)=>{
    try{
     let data=req.body
     console.log(data)
    if(!isValidbody(data)){
        return res.status(400).send({status:false,message:"please provide the data in request body"})
    }

const{firstname,lastname,email}=data

if(!isValid(firstname)){
    return res.status(400).send({status:false,message:"please provide the firstname in request body"})
}

if(!isValid(lastname)){
    return res.status(400).send({status:false,message:"please provide the lastname in request body"})

}
if(!isValid(email)){
    return res.status(400).send({status:false,message:"please provide the email in request body"})
}
if(!emailRegex.test(email)){
 return res.status(400).send({status:false,message:"please provide correct email address"})
    }
    const getemail=await authorModel.findOne({email})
    if(getemail){
        return res.status(400).send({status:false,message:"please enter unique email adress"})
    }
    const createauthor=await authorModel.create(data)
    return res.status(201).send({status:true,message:"author has been created",data:createauthor})
}
catch(error){
    return res.status(500).send({status:false,error:error.message})
    }
}



module.exports={createauthor}