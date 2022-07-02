import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
const Header = ({state}) => {
    const [showMobileMenu,setShowMobileMenu] = useState(false);

    const showMenu = ()=>{
        setShowMobileMenu(true);
    }
    const hideMenu = ()=>{
        setShowMobileMenu(false);
    }
    return ( 
        <>
        {showMobileMenu && <MobileMenu/>}
        <header>
        <div className="logo">
            <h2> <Link to="/victorukwuezeh/">Victor Ukwuezeh</Link></h2>
        </div>

        <div className="harmbuger">
            
             <div onClick={showMobileMenu? hideMenu :showMenu} className="menu mobile" id="menu">
                <div className="bar"></div>
            </div>

          
        </div>
        <div className="nav desktop">
            <ul className="nav-list">
                <li> <Link to="/victorukwuezeh/">Home</Link> </li>
                <li> <Link to="/victorukwuezeh/profile">About Me</Link> </li>
                <li> <Link to="/victorukwuezeh/skills">Skills</Link> </li>
                <li> <Link to="/victorukwuezeh/project">Project</Link> </li>
                <li> <a href="#" id="hireMe" className="hireMe" onClick={()=>state(true)}>Hire Me</a></li>
            </ul>
        </div>
    </header>
    </>
     );
}
 
export default Header;