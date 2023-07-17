import {Link, useMatch, useResolvedPath} from "react-router-dom"


export default function Navbar() {
    let active = false;
    let colour = "white";
    const handleClick=()=>{
        active=!active;
        colour= active ? "yellow" : "white" 
        document.body.style.backgroundColor = colour;
    };
    return <nav className="nav">
        <div class="container">
            <button class="child bounce" onClick={handleClick}></button>
        </div>
        <Link to="/" className="site-title">Webby the Webster</Link>
        
        <ul>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/songs">Songs</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) { 
   const resolvedpath = useResolvedPath(to); 
   const isActive = useMatch({path: resolvedpath.pathname, end: true}) 
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>{children}</Link>
        </li>
    )
}
