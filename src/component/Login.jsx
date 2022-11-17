import React, {useState} from "react";
import {auth} from "../firbase"
import {signInWithEmailAndPassword} from "firebase/auth";
function Login(){
  
  const [email , setEmail] = useState('')
  const [password ,setPassword] = useState("")

  const trackEmail =(e) =>{
    setEmail(e.target.value)
  }

  const trackPassowrd =(e) =>{
    setPassword(e.target.value)
  }

  const printDetails =async ()=>{
     alert(`${email} and ${password}`)
    let userCred =await signInWithEmailAndPassword(auth, email, password)
    console.log(userCred.user);
  }
    return(
        <>
          <h1> This is from Login</h1>
      <input type="text" value={email} placeholder ="email"
       onChange={trackEmail}
      />
      <br></br>
     <input type="password" name ="password" placeholder="password"
     onChange={trackPassowrd}
     />
     <br></br>
      <button type="submit" onClick={printDetails}>Log in</button>
      </>
    )
}
export default Login