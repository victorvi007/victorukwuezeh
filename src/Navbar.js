import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import './Menu.css';
import HirePopup from './HirePopup';

const Navbar = () => {
   
    const [showMobileMenu,setShowMobileMenu] = useState(false);
    const [showPopup,setShowPopup] = useState(false);
 
  
    const showMenu = ()=>{
        setShowMobileMenu(true);
    }
    const hideMenu = ()=>{
        setShowMobileMenu(false);
    }

  
    return ( 

        <div className="navbar">
            {showPopup && <HirePopup state={setShowPopup}/>}
            {showMobileMenu && <MobileMenu mobileState={setShowMobileMenu} contactState={setShowPopup}/>}
        <header>
        <div className="logo">
            <h2> <Link to="/victorukwuezeh/">Victor Ukwuezeh</Link></h2>
        </div>

        <div className="harmbuger">
            
             <div onClick={showMobileMenu? hideMenu :showMenu} className={(showMobileMenu)?"menu mobile rotate":"menu mobile"} id="menu">
                <div className={(showMobileMenu)?"bar open":"bar close"}></div>
            </div>

            
        </div>
        <div className="nav desktop">
            <ul className="nav-list">
                <li> <Link to="/victorukwuezeh/">Home</Link> </li>
                <li> <Link to="/victorukwuezeh/profile">About Me</Link> </li>
                <li> <Link to="/victorukwuezeh/skills">Skills</Link> </li>
                <li> <Link to="/victorukwuezeh/project">Project</Link> </li>
                <li> <a href="#" id="hireMe" className="hireMe" onClick={()=>setShowPopup(true)}>Hire Me</a></li>
            </ul>
        </div>
    </header>
        </div>
     );
}
 
export default Navbar;