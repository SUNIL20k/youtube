
import React from "react"
import { ReactDOM } from "react"

const Navbar=()=>{
    return <div className="navbar">
         <div className="youtube-ico">
            <h1 className="ham-icon"><i className="bi bi-list"></i></h1>
            <img className="youtube-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE54d8krphaVP1AQ1Jd4G1uRqLcA2N81TnA&usqp=CAU"></img>
         </div>
         <div className="input-search">
            <input type="text" placeholder="Search" className="search"></input>
            <button className="search-btn"><i className="bi bi-search"></i></button>
            <button className="mic-btn"><i className="bi bi-mic-fill"></i></button>
         </div>
         <div className="profile-btn">
            <h1><i className="bi bi-camera-video"></i></h1>
            <h1><i className="bi bi-bell"></i></h1>
            <h1><i className="bi bi-person-circle"></i></h1>
         </div>
    </div>
}


export default Navbar;