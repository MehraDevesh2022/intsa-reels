import React, {useState , useEffect} from "react";
import {auth} from "../firbase"
import {signInWithEmailAndPassword , signOut , onAuthStateChanged} from "firebase/auth";
import { async } from "@firebase/util";


function Login(){
  
let [email , setEmail] = useState('')
  let [password ,setPassword] = useState("")
  let [loader , setLoader] = useState(false)
  let [user , setUser] = useState(null);
  let [error , setError] = useState('');
  let [mainLoder , setMainLoader] = useState(true)
 
  
   
  const trackEmail =(e) =>{
    setEmail(e.target.value)
  }

  
  const trackPassowrd =(e) =>{
    setPassword(e.target.value)
  }

  const printDetails =async ()=>{
    try {
   setLoader(true)
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
     setLoader(false)
  }


  //  this function is provided by firebase :onAuthStateChanged(auth , callback)
  // this will check if already login then render the loged in page when page relaod or any state change occures
  // also if user not loged last time then show log in from
  // useEffect  will run 1 time in life cycle because empty array
  useEffect(() =>{
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
     setUser(user)
    // ...
  } else {
    // User is signed out
    // ...
    setUser(null)
  }
  setMainLoader(false)
});
} ,[])


  const signout =async ()=>{
    await signOut(auth);
    setUser(null)
  }


    
    
  
   return(
        <>
        {
          mainLoder == true ? <h1>Page loading...</h1>
          :
          error !=''? <h1>error is {error}</h1> 
          :
          loader ==true ? <h1>...loding</h1> 
          :
          user !=null ?  <><button onClick={signout}>Sign Out</button> <h1> user is{user.uid}</h1></> 
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