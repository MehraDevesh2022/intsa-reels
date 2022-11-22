import React, {useState , useEffect} from "react";
import {auth} from "../firbase"
import { onAuthStateChanged } from "firebase/auth"
export const AuthContext = React.createContext();

export function AuthContextProvider({children}){
    let [mainLoader , setMainLoader] = useState(true);
    let [currUser , setCurrUser] = useState('')
    
    useEffect(() =>{
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
     setCurrUser(user)
    // ...
  } else {
    // User is signed out
    // ...
    setCurrUser(null)
  }
  setMainLoader(false)
});
} ,[])

let value = {currUser}

return(
 <AuthContext.Provider value={value}>

  {!mainLoader  && children}
 </AuthContext.Provider>
)
}
