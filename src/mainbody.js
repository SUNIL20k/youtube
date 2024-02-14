import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShimmerFinal from "./shimmer";


const TopBar=()=>{
  return <div className="topbar">
    <button className="content-btn">All</button>
    <button className="content-btn">Gaming</button>
    <button className="content-btn">Mixes</button>
    <button className="content-btn">Game for peace</button>
    <button className="content-btn">One peace</button>
    <button className="content-btn">Gadgets</button>
    <button className="content-btn">LIVE</button>
    <button className="content-btn">Mobile Games</button>
    <button className="content-btn">Computer Programming</button>
    <button className="content-btn">Player Unknown Battle Ground</button>
    <button className="content-btn">CODING</button>
    <button className="content-btn">Film</button>
    <button className="content-btn">CARS</button>
    <button className="content-btn">Tourist</button>
    <button className="content-btn">Dubai</button>
    <button className="content-btn">Antractic</button>
    <button className="content-btn">ANIME</button>
  </div>
}

const Posture=()=>{
  return <div className="">
       <img className="post-img"></img>
  </div>
}

const ContentBody=(props)=>{
  return <div className="box">
            <img className="video" src={props.data.snippet.thumbnails.high.url}></img> 
       
       <div className="profile-name">
            <img className="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-n45GFaW-PHytZc1fhJ_Rt9xvMxR2rc3imA&usqp=CAU"></img>
          <div className="profile-text">
              <h1 className="profile-head">{props.data.snippet.localized.title}</h1>
              <p>{props.data.snippet.channelTitle}</p>
              <p>{Math.floor(props.data.statistics.viewCount/1000)}k Views . 1 day ago</p>
          </div>
       </div>
       </div>
}



const Mainbody=()=>{
  const [youtube,setyoutube]=useState([])
  async function Youtube(){
    const data=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=AIzaSyDslQ71LyaoMJRzktGGnTz4rGhDX2I1XEg")
    const finaldata=await data.json()
    console.log(finaldata.items)
    setyoutube(finaldata.items)
  }
  useEffect(()=>{
    Youtube()
  },[])
  if(youtube.length==0){
      return <ShimmerFinal/>
  }
  else {
    return <div className="mainbody">
    <div className="mainbody-2">
     <TopBar/>

     <div className="content-box">
       {
            youtube.map((x)=>{
             return <Link className="link" to={"/video/"+x.id}><ContentBody data={x}/></Link>
            })
       }

     </div>
    </div>
</div>
  }
  
}
  

export default Mainbody;
