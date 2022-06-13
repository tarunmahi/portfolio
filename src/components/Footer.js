import React from "react";
import "../cssfiles/footermodule.css"
import img1 from "../Assets/1217141_fb_icon.png"
import img2 from "../Assets/1217163_twitter_icon.png"
import img3 from "../Assets/linked.png"
import img4 from "../Assets/git.png"
import img5 from "../Assets/inst.png"

export default function Footer(){
    return(
        <div className="footer">
           <img src={img1} height="30px"></img>
           <img src={img2} height="30px"></img>
           <img src={img3} height="30px"></img>
           <img src={img4} height="30px"></img>
           <img src={img5} height="30px"></img>
        </div>
    )
}