import "./menu.css"

export default function Menu({ menuOpen, setMenuOpen }) {
     return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#welcomeMessage">Home</a>
                 </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#projectTiles">projectTiles</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">contact</a>
                </li>
            </ul>
        </div>
       )
    
    }