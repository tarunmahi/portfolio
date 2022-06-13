import React from "react";
import  ReactDOM  from "react";
import Info from "./components/Info.js"
import About from "./components/About.js"
import Interests from "./components/Interests.js"
import Footer from "./components/Footer.js"



export default function App(){
  return(
    <div className="container">
       <div className="container-info"><Info /></div>
       <div className="container-About"><About /></div>
       <div className="container-Interests"><Interests /></div>
       <div className="container-Footer"><Footer /></div>
      
    </div>
  )
}