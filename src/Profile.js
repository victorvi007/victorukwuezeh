import { useState } from 'react';
import HirePopup from './HirePopup';
import profilePicture from './img/avater-2.jpg';

const Profile = () => {
    const [showPopup,setShowPopup] = useState(false);
    return ( 
        <>
        {showPopup && <HirePopup state={setShowPopup}/>}
        <div className="profile">
        <div className="card">
            <div className="board">

                <div className="card-head">

                    <figure>
                        <img src={profilePicture} alt=""/>
                    </figure>

                    <div className="avater-info">
                        <p>Hello, i am</p>
                        <h2>Victor Ukwuezeh</h2>
                        <p>And i am a Fullstack Developer</p>
                    </div>
                </div>

                <div className="card-body">
                    <div className="card-body-content">
                        <div className="follow-links">
                            <p> <i className="fas fa-envelope"></i> <a
                                    href="mailto:victorukwuezeh@gmail.com">victorukwuezeh@gmail.com</a> </p>
                            <p><i className="fab fa-linkedin"></i> <a
                                    href="https://www.linkedin.com/in/victor-ukwuezeh-832833181"> victor ukwuezeh
                                </a>
                            </p>
                            <p><i className="fab fa-twitter-square"></i><a href="https://twitter.com/victorukwuezeh">
                                    @victorukwuezeh </a></p>
                            <p><i className="fab fa-github"></i> <a
                                    href="https://github.com/victorvi007">github.com/victorvi007</a></p>
                            <p><i className="fas fa-globe"></i><a
                                    href="https://www.victorukwuezeh.com">victorukwuezeh.com</a>
                            </p>
                        </div>
                        <div className="article">
                            <p>
                                I'm a final year Electronic Engineering student at University of Nigeria and i
                                create stuffs
                                for the internet
                            </p>
                            <p>
                                I really enjoy programmming and love to be always learning something new. I have a
                                strong
                                work ethic, and I can quickly pick up on new technologies.
                            </p>
                            <p>
                                I'm currently completing an internship at CATA Automated Systems, where I'm working
                                on
                                software development projects,network management. I also have four years of experience as a front-end
                                web
                                developer, and in my leisure time, I like building my own programming projects.
                            </p>
                            <h3>
                                <a  className="hireMe" onClick={()=>setShowPopup(true)}>Hire Me</a>
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
     );
}
 
export default Profile;