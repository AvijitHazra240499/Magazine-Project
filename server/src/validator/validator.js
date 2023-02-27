const { default: mongoose } = require("mongoose")

const isValid=(x)=>{
if(typeof x==="undefined" || x===null) return false
if(typeof x==="string" && x.trim().length===0) return false
return true
}

const isValidbody=function(x){
    return Object.keys(x).length>0
}

const isValidObjectId=(y)=>{
return mongoose.isValidObjectId(y)
}

let titleRegex = /^(?:([A-Za-z0-9]+\-\1+[A-Za-z0-9/])|([A-Za-z])|([A-Za-z]+\ \1+[A-Za-z0-9])|([([A-Za-z0-9]+\,\1+[A-Za-z0-9\s]))+$/
let checkISBN= /^(?=(?:\D*\d){13}(?:(?:\D*\d){3})?$)[\d-]+$/
let emailRegex = /^[a-z]{1}[a-z0-9._]{1,100}[@]{1}[a-z]{2,15}[.]{1}[a-z]{2,10}$/

module.exports={isValid,isValidbody,isValidObjectId,titleRegex,checkISBN,emailRegex}