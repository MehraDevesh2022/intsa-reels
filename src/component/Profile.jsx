import React, {useState , useContext} from "react";
import  "./profile.css"
import { AuthContext } from "../context/AuthContext";

function Profile(){
   let contextObj =  useContext(AuthContext);
    console.log(contextObj);
   let [loading , setLoading] = useState('');
    return(
        <>
   { contextObj.currUser ==null ? <div>Need to login</div> :
    <div> Loged in user is {contextObj.currUser.uid}</div>     
    //   <div className="header"></div>
    //   <div className="main">
    //   {/* main has details elm and prfile img elm */}
    //   <div className="pimg_container">
    //     <img src="https://www.pngitem.com/pimgs/m/105-1050694_user-placeholder-image-png-transparent-png.png" alt="img" className="pimg" />
    //   </div>
    //  <div className="detalis">
    //   <div className="content">Rahul</div>
    //   <div className="content">Num of Post : <span className="bold-text">Posts</span></div>
    //   <div className="content">Email <span className="bold-text">Email.com</span></div>

    //  </div>

    //   </div>
}
        </>
    )
}
export default Profile