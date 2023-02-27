const booksmagazinesModel=require("../model/booksmagazinesModel")
const {isValid,isValidbody,checkISBN,titleRegex,isValidObjectId}=require("../validator/validator")

const createbook=async function(req,res){
    try{
    const data=req.body
    // const authorId=req.params.authorId
    if(!isValidbody(data)){
        return res.status(400).send({status:false,message:"please provide the data in request body"})
   }
  
   const {authorId,title,ISBN,types,description}=data
  
   if(!isValidObjectId(authorId)){
    return res.status(400).send({status:false,message:"please provide correct authorId"})
  }
 
  if(!isValid(authorId)){
    return res.status(400).send({status:false,message:"please provide the title in request body"})
   }
   
   if(!isValid(title)){
    return res.status(400).send({status:false,message:"please provide authorId in request body"})
   }
   if(!titleRegex.test(title)){
    return res.status(400).send({status:false,message:"please provide title in correct formate"})
  }
  const uniquetitle=await booksmagazinesModel.findOne({title})
   if(uniquetitle){
    return res.status(400).send({status:false,message:"please provide unique title "})
   }
   if(!isValid(ISBN)){
    return res.status(400).send({status:false,message:"please provide the ISBN in request body"})
   }
   if(!checkISBN.test(ISBN)){
    return res.status(400).send({status:false,message:"please provide the ISBN in correct formate"})
   }
   const uniqueISBN=await booksmagazinesModel.findOne({ISBN})
   if(uniqueISBN){
    return res.status(400).send({status:false,message:"please provide unique ISBN "})
   }
   if(!isValid(description)){
    return res.status(400).send({status:false,message:"please provide the description in request body"})
   }
   if(types==="books"){
    const book=await booksmagazinesModel.create(data)
    return res.status(201).send({status:true,message:"book created successfully", data:book})
   }else if(types==="magazines") {
    const magazines=await booksmagazinesModel.create(data)
    return res.status(201).send({status:true,message:"magazines created successfully", data:magazines})
  } else{
    return res.status(400).send({status:false,message:"you have to choose types either magazines or books"})

  }
  
}
catch(error){
return res.status(500).send({satatus:false,message:error.message})
}
}

const getbooks=async function(req,res){
    try{
    const query=req.query

    const{ISBN,title,types}=query
    let filter={}
    
    if(query.hasOwnProperty("ISBN")){
        if(isValid(ISBN)){
         filter.ISBN=ISBN
        }
    }
    if(query.hasOwnProperty("title")){
        if(isValid(title)){
         filter.title=title
        }
    }
    if(query.hasOwnProperty("email")){
        if(isValid(email)){
       const authordoc=await authorModel.findOne({email})
       if(!authordoc) return res.status(404).send({status:false,message:'email not available'})
       filter["authorId"]=authordoc._id
      }
    }
    
    if(query.hasOwnProperty("types")){
      if(isValid(types)){
       if(types==="books"){
        filter.types="books"
        const getbooks=await booksmagazinesModel.find(filter).sort({title:1})
        if(!getbooks.length) return res.status(404).send({status:false,message:"No books find"})
        return res.status(200).send({status:false,message:"books find successfully",data:getbooks })
        }else if(types==="magazines"){
          filter.types="magazines"
          const magazines=await booksmagazinesModel.find(filter).sort({title:1})
          if(!magazines.length) return res.status(404).send({status:false,message:"No magazines find"})
          return res.status(200).send({status:false,message:"magazines find successfully",data:magazines })
        }else{
       return res.status(400).send({status:false,message:"please select types within books or magazines"})
         }
      }
    }

      
}catch(error){
        return res.status(500).send({status:false,message:error.message})
    }
}

module.exports={createbook,getbooks}