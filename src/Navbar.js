import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import HirePopup from './HirePopup';
import gmailIcon from './icons/icons8-gmail.svg';
import whatsappIcon from './icons/icons8-whatsapp.svg';
import twitterIcon from './icons/icons8-twitter.svg';
import linkedinIcon from './icons/iconfinder_square-linkedin_317725.svg';
import cancelIcon from './icons/times-solid.svg';
const Navbar = () => {
   
    const [showMobileMenu,setShowMobileMenu] = useState(false);
    const [showPopup,setShowPopup] = useState(false);
 
  

  
    return ( 

        <div className="navbar">
            {showPopup && <HirePopup state={setShowPopup}/>}
            <Header state={setShowPopup}/>
        </div>
     );
}
 
export default Navbar;