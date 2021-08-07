import Topbar from "./components/topbar/Topbar";
import WelcomeMessage from "./components/welcomeMessage/WelcomeMessage"
import ProjectTiles from "./components/projectTiles/ProjectTiles"
import Contact from "./components/contact/Contact"
import "./app.css"


function App() {
  return (
    <div className="app">
     <Topbar/> 
     <div className="sections">
      <WelcomeMessage/> 
     <ProjectTiles/>
     <Contact/> 
     </div>
    </div>
  );
}

export default App;


