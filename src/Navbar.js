import { useState } from 'react';
import Header from './Header';
import HirePopup from './HirePopup';

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