const Backend = () => {
    return ( 
        <div className="backend" id="backend">
                    <h2><i className="fas fa-code"></i></h2>
                    <h3>Backend</h3>
                    
                    <div className="progress-bar">
                        <h5>PHP</h5>
                        <div className="progress">
                            <div className="fluid" style={{ width:'70%' }}></div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <h5>Nodejs</h5>
                        <div className="progress">
                            <div className="fluid" style={{ width:'40%' }}></div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <h5>MySQL</h5>
                        <div className="progress">
                            <div className="fluid" style={{ width:'70%' }}></div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <h5>MongoDB</h5>
                        <div className="progress">
                            <div className="fluid" style={{ width:'50%' }}></div>
                        </div>
                    </div>
                </div>
     );
}
 
export default Backend;