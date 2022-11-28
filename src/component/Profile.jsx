import React, { useState, useContext , useEffect } from "react";
import "./profile.css";
import { AuthContext } from "../context/AuthContext";
import { async } from "@firebase/util";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firbase";
function Profile() {
  let cUser = useContext(AuthContext); // getting global value current state of user. from AuthContext
  console.log(cUser.currUser.uid);
  let [pageLoaing , setPageLoading] = useState(true);
let [user , setUser] =useState('');



// now set user from database user collection documenet using user uid 

useEffect(function fun(){
  (async function(){
    // docRef is refence of documnet of user get by user document id set in signup component
    const docRef = doc(db, "users", cUser.currUser.uid);
    // using docRef data getting from database
    const userObj = await getDoc(docRef);
    console.log("Document data:", userObj.data());
    //setting user data
    setUser(userObj.data());
    // loadig fails because data extracted
    setPageLoading(false);
  })()
},[])
  return (
    <>
      {pageLoaing == true ? ( // agar user logged in hai to user profile so kro wrna Need to login show kro
        <div>Loading . . .</div>
      ) : (
        <>
          <div className="header"></div>
          <div className="main">
            {/* main has details elm and profile img elm */}
            <div className="pimg_container">
              <img src={user.profileUrl} alt="img" className="pimg" />
            </div>
            <div className="detalis">
              <div className="content">{user.fullName}</div>
              <div className="content">
                Num of Post :{" "}
                <span className="bold-text">{user.reelsId.length}</span>
              </div>
              <div className="content">
                Email <span className="bold-text">{user.email}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Profile;
