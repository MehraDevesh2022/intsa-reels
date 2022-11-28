import React, {useState , useEffect} from "react";
import {auth} from "../firbase"
import { onAuthStateChanged } from "firebase/auth"
export const AuthContext = React.createContext();

export function AuthContextProvider({children}){
    let [mainLoader , setMainLoader] = useState(true);
    let [currUser , setCurrUser] = useState('')
    
 
 // onAuthStateChanged() function provied to hole application user state is log in or not
 // we are using this function inside the context because we don't need that add this function to all component therefore we are making this as global for user login and logout state
    useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setCurrUser(user);
          // ...
        } else {
          // User is signed out

          setCurrUser(null);
        }
        setMainLoader(false);
      });
      // basically  onAuthStateChanged   is event listner for user every time when user chnage his state the onAuthStateChanged runs and set the state of user
      //  but when user state not change and we don't want anything about user state . despite onAuthStateChanged function runs .
      // for that unnecessary inteference of onAuthStateChanged we have unsubscribe retruns by onAuthStateChanged it self for stoping the code 
      return unsubscribe;
    } ,[])

let value = {currUser}
                                          
return (
  //  value is current user details
  <AuthContext.Provider value={value}> 

    {/* without user state none of any component will render because all are wrapped
    inside the AuthContextProvider function into app.js and those all are the
    children of AuthContextProvider so until mainLoader == true nothing will render on the screen  */}
    {mainLoader == false && children}
  </AuthContext.Provider>
);
}
