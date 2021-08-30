import "./welcomeMessage.css";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function WelcomeMessage() {

     const textRef = useRef();

      
     useEffect(() => {
      init(textRef.current, {
         showCursor: true,
         backDelay: 1500,
         backSpeed: 60,
        
          strings: ['developer', 'programmer', "student"] })
     }, []);
 
       return (
    <div className="welcomeMessage" id="welcomeMessage"> 
       <div className="left">
          <div className="imgContainer">
             <img src="assets/dude.jpg" alt=""/>
          </div>
       </div>
       <div className="right">
          <div className="wrapper">
             <h2>Hi there I'm</h2>
             <h1>Victor Etuokwu</h1>
             <h3>Freelance <span ref={textRef}></span></h3>
          </div>
          <a href="#portfolio">
             <img src="assets/down.png" alt=""/>
          </a>
       </div>
    </div>
       )

}