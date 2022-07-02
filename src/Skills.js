import {useState} from 'react';
import Backend from './Backend';
import Design from './Design';
import Frontend from './Frontend';
const Skills = () => {
    const [showDesign,setShowDesign] = useState(true);
    const [showFrontend,setShowfrontend] = useState(false);
    const [showBackend,setShowBackend] = useState(false);

    const designBtn = ()=>{
        setShowDesign(true)
        setShowfrontend(false)
        setShowBackend(false)
    }
    const frontendBtn = ()=>{
        setShowDesign(false)
        setShowfrontend(true)
        setShowBackend(false)

    }
    const backendBtn = ()=>{
        setShowDesign(false)
        setShowfrontend(false)
        setShowBackend(true)
    }

    return ( 
        
        <div className="skills">
        <div className="board">
            <div className="buttons">
                <div className="btn" onClick={designBtn}> <p><i className="fas fa-drafting-compass"></i></p> Designer</div>
                <div className="btn" onClick={frontendBtn}> <p><i className="fab fa-html5"></i></p> Front-end Developer</div>
                <div className="btn" onClick={backendBtn}> <p><i className="fas fa-code"></i></p> Back-end Developer</div>
            </div>

            <div className="screen">
                    {showDesign && <Design/>}
                    {showFrontend && <Frontend/>}
                    {showBackend && <Backend/>}
            </div>
        </div> 
  
      
    </div>
     );
}
 
export default Skills;