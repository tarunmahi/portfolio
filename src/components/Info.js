import React from "react"
import img1 from "./../Assets/jhonny.png"
import "./../cssfiles/infomodule.css"
import img2 from "./../Assets/email.png"
import img3 from "./../Assets/linkedin-logo-png-1833.png"

export default function Info(){
    return(
      
        <div className="info">
        <img src={img1} height=""></img>
        <h2>Jhonny depp</h2>
        <h3>Actor</h3>
        <h4>professional website</h4>
        <div className="infobutt">
        <button className="email"><img height="15px" src={img2}></img>Email</button>
        <button className="linked"><img height="16px" 
        src={img3}></img>Linkedin</button>
        </div>
        </div>
        
        
        
    )
}