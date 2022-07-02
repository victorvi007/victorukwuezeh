import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
const Header = ({state}) => {
    const [showMobileMenu,setShowMobileMenu] = useState(false);
    const [showPopup,setShowPopup] = useState(false);

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
            <h2> <Link to="/">Victor Ukwuezeh</Link></h2>
        </div>

        <div className="harmbuger">
            
             <div onClick={showMobileMenu? hideMenu :showMenu} className="menu mobile" id="menu">
                <div className="bar"></div>
            </div>

          
        </div>
        <div className="nav desktop">
            <ul className="nav-list">
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/profile">About Me</Link> </li>
                <li> <Link to="/skills">Skills</Link> </li>
                <li> <Link to="/project">Project</Link> </li>
                <li> <a  id="hireMe" className="hireMe" onClick={()=>state(true)}>Hire Me</a></li>
            </ul>
        </div>
    </header>
    </>
     );
}
 
export default Header;