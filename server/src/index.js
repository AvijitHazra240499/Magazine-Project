const express=require("express")
const app=express()
const mongoose=require("mongoose");
const route  = require("./routes/route");
const cors=require("cors")
app.use(express.json())
app.use(cors())
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://avijithazra12:Avijit16+@cluster0.b7ob9.mongodb.net/Megazine",{
    useNewUrlParser:true
})
.then(()=>console.log("mongodb is connected"))
.catch(error=>console.log(error))
app.use("/",route)

let port=process.env.port||3000

app.listen(port,function(){
    console.log(`Express is running on port ${port}`)
})