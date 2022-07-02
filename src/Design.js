const Design = () => {
    return ( 
        <div className="designs" id="design">
                        <h2><i className="fas fa-drafting-compass"></i></h2>
                        <h3>Design</h3>
                        
                        <div className="progress-bar">
                            <h5>Research</h5>
                            <div className="progress">
                                <div className="fluid" style={{ width:'90%' }}></div>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <h5>Adobe XD</h5>
                            <div className="progress">
                                <div className="fluid" style={{ width:'80%' }}></div>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <h5>Figma</h5>
                            <div className="progress">
                                <div className="fluid" style={{ width:'50%' }}></div>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <h5>Sketch</h5>
                            <div className="progress">
                                <div className="fluid" style={{ width:'50%' }}></div>
                            </div>
                        </div>
                </div>
     );
}
 
export default Design;