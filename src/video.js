import React from "react";
// import { ReactDOM } from "react";
// import { Router} from "react-router-dom";
import { useParams } from "react-router-dom";



const Video=()=>{
    const {id}=useParams()
    const url="https://www.youtube.com/embed/"
    return <div className="video-box">
         <iframe className="nxt-video" width="800" height="470" src={url+id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
}
export default Video;

