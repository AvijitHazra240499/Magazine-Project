import React, { useState } from "react";
import axios from "axios";
const App=()=>{
    const [firstName,updateFirstName]=useState("")
    const [lastName,updateLastName]=useState("")
    const [email,updateEmail]=useState("")

   const [item,setItem]=useState("")
   let obj={firstname:firstName,lastname:lastName,email}

       async function author(){
        const host='http://localhost:3000/author'
        const option=await axios.post(`${host}`,{
            ...obj
        })
      let res=  JSON.stringify(option.data.data)
        setItem(res)
       }
    
    
return(
    <div>
    
    <form onSubmit={(e)=>{e.preventDefault()}}>
    <input name="name" placeholder="firstname" onChange={(e)=>{
    updateFirstName(e.target.value)
    }}/> <br/> <br/>
     
    <input name="name" placeholder="lastname" onChange={(e)=>{
    updateLastName(e.target.value)
    }}/> <br/> <br/>
    <input name="name" placeholder="email" onChange={(e)=>{
    updateEmail(e.target.value)
    }}/> <br/><br/>
    <button onClick={()=>{author()}}>click me</button>
    </form>
    {item}
    </div>
)
}
export default App