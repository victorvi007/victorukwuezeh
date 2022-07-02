import { useState } from 'react';
import HirePopup from './HirePopup';
const Home = () => {
    const [showPopup,setShowPopup] = useState(false);
    return ( 
        <>
        {showPopup && <HirePopup state={setShowPopup}/>}
        <section>
            <div className="right-content">
                <p>Hello There!, I am</p>
                <h2>Victor,</h2>
                <p>Fullstack Web Developer, Programmer & Freelancer</p>
                <p>Welcome To My Website Portfolio</p>
                    <a  id="hireMe" className="btn hireMe" onClick={()=>setShowPopup(true)}>Hire Me</a>
            
            </div>
            <blockquote>
                <p>
                    like Neo from the Matrix, the world opens up and you start to see everything in 1's and 0's
                </p>
            </blockquote>
        </section>
        </>
     );
}
 
export default Home;