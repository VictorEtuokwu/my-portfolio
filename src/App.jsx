import Topbar from "./components/topbar/Topbar";
import WelcomeMessage from "./components/welcomeMessage/WelcomeMessage";
import ProjectTiles from "./components/projectTiles/ProjectTiles";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Works from "./components/works/Works";
import "./app.css"
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <WelcomeMessage/>
        <Portfolio/> 
        <Works/>
        <ProjectTiles/>
        <Contact/> 
      </div>
    </div>
  );
}

export default App;


