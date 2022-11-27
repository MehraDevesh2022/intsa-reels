import React, { useState, useContext } from "react";
import "./profile.css";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  let contextObj = useContext(AuthContext); // getting global value current state of user. from AuthContext
  console.log(contextObj);
  let [loading, setLoading] = useState("");
  return (
    <>
      {
        contextObj.currUser == null ? // agar user logged in hai to user profile so kro wrna Need to login show kro
         <div>Need to login</div> :  
         <>
         <div className="header"></div>
          <div className="main">
          {/* main has details elm and profile img elm */}
          <div className="pimg_container">
            <img src="https://www.pngitem.com/pimgs/m/105-1050694_user-placeholder-image-png-transparent-png.png" alt="img" className="pimg" />
          </div>
         <div className="detalis">
          <div className="content">Rahul</div>
          <div className="content">Num of Post : <span className="bold-text">Posts</span></div>
          <div className="content">Email <span className="bold-text">Email.com</span></div>

         </div>

          </div>
          </>
      }
    </>
  );
}
export default Profile;
