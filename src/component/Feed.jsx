import React from "react";
import "./feed.css"
function Feed(){
    return (
      <>
        <div className="header">
          <img
            src="https://raw.githubusercontent.com/udai1931/ReactYT/master/reels/src/Assets/Instagram.JPG"
            alt="insta img"
            className="insta_img"
          />
          <img
            src="https://media-exp1.licdn.com/dms/image/D4D03AQHrCNViErNEIg/profile-displayphoto-shrink_800_800/0/1669399410064?e=1675296000&v=beta&t=XpK04NQmqVoTwP747vbUhQcq2h3CXjBO4wbfD59BURM"
            alt=""
            className="profile_img"
          />
        </div>
        <div className="main_container">
          <div className="upload_container">
            <i class="fa-solid fa-clapperboard"></i>
          </div>
          <div className="reels_container">Reels</div>
        </div>
      </>
    );
}
export default Feed