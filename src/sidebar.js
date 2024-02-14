import React from "react";

const Sidebar=()=>{
    return <div className="sidebody">

         <div className="Home-box">
          <button className="side-btn"><i className="bi bi-house-door-fill"></i> Home</button>
          <button className="side-btn"><i className="bi bi-play-btn"></i> Short</button>
          <button className="side-btn"><i className="bi bi-collection-play"></i> Subscriptions</button>
         </div>

         <div className="Home-box">
          <button className="side-btn you">You <i className="bi bi-chevron-right"></i></button>
          <button className="side-btn"><i className="bi bi-person"></i> Your Channel</button>
          <button className="side-btn"><i className="bi bi-clock-history"></i> History</button>
          <button className="side-btn"><i className="bi bi-play-btn"></i> Your Videos</button>
          <button className="side-btn"><i className="bi bi-clock"></i> Watch Later</button>
          <button className="side-btn"><i className="bi bi-hand-thumbs-up"></i> Liked Videos</button>
         </div>

         <div className="Home-box">
          <button className="side-btn you">Explore</button>
          <button className="side-btn"><i className="bi bi-fire"></i> Trending</button>
          <button className="side-btn"><i className="bi bi-bag"></i> Shopping</button>
          <button className="side-btn"><i className="bi bi-music-note"></i> Music</button>
          <button className="side-btn"><i className="bi bi-film"></i> Movie</button>
          <button className="side-btn"><i className="bi bi-broadcast"></i> Live</button>
          <button className="side-btn"><i className="bi bi-controller"></i> Gaming</button>
          <button className="side-btn"><i className="bi bi-newspaper"></i> News</button>
          <button className="side-btn"><i className="bi bi-lightbulb"></i> Learning</button>
          <button className="side-btn"><i className="bi bi-broadcast-pin"></i> Pordcast</button>
         </div>
    </div>
  }
export default Sidebar;