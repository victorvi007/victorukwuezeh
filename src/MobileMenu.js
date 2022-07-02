import { useState } from 'react';
import { Link } from 'react-router-dom';
import gmailIcon from './icons/icons8-gmail.svg';
import whatsappIcon from './icons/icons8-whatsapp.svg';
import twitterIcon from './icons/icons8-twitter.svg';
import linkedinIcon from './icons/iconfinder_square-linkedin_317725.svg';
import cancelIcon from './icons/times-solid.svg';
const MobileMenu = () => {
    const [showMobileMenu,setShowMobileMenu] = useState(false);
    const [showPopup,setShowPopup] = useState(false);
    return ( 
        <div className="slide-menu mobile" >
        <div className="nav-link" >
            <Link to="/victorukwuezeh/"onClick={()=>setShowMobileMenu(false)}>Home</Link>
            <Link to="/victorukwuezeh/profile"onClick={()=>setShowMobileMenu(false)}>About Me</Link>
            <Link to="/victorukwuezeh/skills"onClick={()=>setShowMobileMenu(false)}>Skill</Link>
            <Link to="/victorukwuezeh/project"onClick={()=>setShowMobileMenu(false)}>Projects</Link>
            <a  id="hireMe" className="hireMe" onClick={()=>setShowPopup(true)}>Hire Me</a>

            <div className="contacts-menu">

                <a href="mailto:victorukwuezeh@gmail.com"> <img src={gmailIcon} alt=""/> </a>
                <a href="https://Wa.me/+2348120844654?text=Hello!+i+want+to+hire_you+for+a+project"> <img src={whatsappIcon} alt=""/> </a>
                <a href="https://twitter.com/victorukwuezeh"> <img src={twitterIcon} alt=""/> </a>
                <a href="https://www.linkedin.com/in/victor-ukwuezeh-832833181"> <img src={linkedinIcon} alt=""/> </a>

            </div>
        </div>
    </div>
     );
}
 
export default MobileMenu;