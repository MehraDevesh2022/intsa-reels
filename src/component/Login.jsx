import React, {useState} from "react";
import {auth} from "../firbase"
import {signInWithEmailAndPassword} from "firebase/auth";
function Login(){
  
  let [email , setEmail] = useState('')
  let [password ,setPassword] = useState("")
  let [error , setError] = useState('');
  let [loder , setLoder] = useState(false)
  let [user , setUser] = useState(null);
  
  
  const trackEmail =(e) =>{
    setEmail(e.target.value)
  }

  const trackPassowrd =(e) =>{
    setPassword(e.target.value)
  }

  const printDetails =async ()=>{
    try {
      
    setLoder(true)
    alert(`${email} and ${password}`)
    let userCred =await signInWithEmailAndPassword(auth, email, password)
    setUser(userCred.user)
    // console.log(userCred.user);

    } catch (error) {
       setError(error.message)  
       // after a little bit later error will false
       setTimeout(() =>{
        setError('')
       } , 3000) 
    }
     setLoder(false)


  }
    return(
        <>
        {
          error !='' ? <h1>error is {error}</h1> 
          :
          loder ==true ? <h1>...loding</h1> 
          :
          user !=null ? <h1>user is{user.uid}</h1> 
          : 
 <>
        <h1> This is from Login</h1>
      <input type="text" value={email} placeholder ="email"
       onChange={trackEmail}/>
      <br></br>
     <input type="password" name ="password" placeholder="password"
     onChange={trackPassowrd}
     />
     <br></br>
      <button type="submit" onClick={printDetails}>Log in</button>
          </>
        }
      </>
    )
}
export default Login