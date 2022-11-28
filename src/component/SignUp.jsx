import { async } from "@firebase/util";
import React,{useState} from "react";
import {auth ,db } from "../firbase"
import { collection, addDoc, doc, setDoc } from "firebase/firestore"; 
import {createUserWithEmailAndPassword } from "firebase/auth";


function SignUp(){
   let [email , setEmail] = useState('')
   let [password ,setPassword] = useState('');
   let [fullName , setFullName] = useState('')
   let [user , setUser] = useState(null)
   let [loader , setLoader] = useState(false)
   let [error , setError] = useState('')
   const trackEmail =(e)=>{
    setEmail(e.target.value)
   }
   const trackPassword =(e)=>{
    setPassword(e.target.value)
   }
  const trackName =(e)=>{
    setFullName(e.target.value)
   }
   const processSignup =async ()=>{
       try{
         setLoader(true);

         let userCred = await createUserWithEmailAndPassword(
           auth,
           email,
           password
         ); // this will add details into  auth section(email , pass for future log in)
         console.log(userCred);

         // this will add all detials of user into firebase database firestore
         // #### this one using set method. here we have option to pass id for every documnet.
         // we passing  userCred.user.uid for every documnet as paameter . as a docmunet id
         await setDoc(doc(db, "users", userCred.user.uid), {
           email,
           fullName,
           reelsId: [],
           profileUrl: "",
           userId: userCred.user.uid,
         });

         //###### this one is using add method :
         // . here we dont have to option to set id for user document.with this method id added by firse store for very user document
         // not having id for document is way more deficult to get user data from db later
         // const docRef = await addDoc(collection(db, "users"), { // this code is refer to firebase
         //   // cracting a collection into firebase db with name users
         //   // these info will add into the data base in users collection
         //             email,
         //             fullName,
         //             reelsId :[],
         //             profileUrl : "",
         //             userId : userCred.user.uid // this is unique id provided by firbase auth fro every user
         //      });

         setUser(userCred.user);
       }catch(err){
       setError(err.message)
       setTimeout(() => {
           setError('')
       }, 5000);
       }
       setLoader(false)
   }

    return(
     <>
       { error !=''? <h1>error is{error}</h1> :
         loader == true ?<h1>loading ...</h1> :
        user !=null ? <h1>SingedUp user is {user.uid}</h1> :
<>     <input type ="text" value={email} placeholder="Enter email"  onChange={trackEmail}></input>
      <br></br>
      <input type="password" placeholder="Password" onChange={trackPassword}></input>
      <br></br>
      <input type="text" placeholder="Full Name" onChange={trackName}/>
      <br></br>
      <button onClick={processSignup}>Sign Up</button>
      <br></br>

</>
       }
        </>
    )
}

export default SignUp