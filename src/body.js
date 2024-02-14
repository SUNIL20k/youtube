
import React from "react"
import { ReactDOM } from "react"
import Sidebar from "./sidebar"
import Mainbody from "./mainbody"
// import Api from "./mainbody"
const Body=()=>{
    return <div className="body">
         <Sidebar/>
         <Mainbody/>
         {/* <Api/> */}
    </div>
  }
export default Body;