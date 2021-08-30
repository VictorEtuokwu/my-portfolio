import "./topbar.css";
import { mdiAccountCircle } from '@mdi/js';
import { mdiEmail } from '@mdi/js';
import Icon from '@mdi/react'

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
    <div className={"topbar " + (menuOpen && "active")}> 
      <div className="wrapper">
         <div className="left">
            <a href="#welcomeMessage" className="logo">Victor's Website.</a>
               <div className="itemContainer">
                  <Icon 
                  path={mdiAccountCircle}
                  size={1} 
                  className="icon"/>
                  {/* <mdiAccountCircle  /> */}
                  <span>587 703 63363</span> 
               </div>
               <div className="itemContainer">
            <Icon path=  {mdiEmail}
             size={1} 
             className="icon"/>
                    
                   <span>victoretuokwu3@gmail.com</span> 
               </div>
             </div>
             <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                   <span className="line1"></span>
                   <span className="line2"></span>
                   <span className="line3"></span>
                </div>
             </div>
         </div>
      </div>
   );
}