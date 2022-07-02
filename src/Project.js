import calculatorPng from './img/calculator.png';
import todoListPng from './img/todoList.png';
import digitalClockPng from './img/digitalClock.png';
import movieSearchEnginPng from './img/movieSearchEngin.png';
import countrySearchPng from './img/country-search.png';
import portfolioPng from './img/portfolio.png';
import quoteAppPng from './img/quoteApp.png';
const Project = () => {
    return ( 
        <div className="projects">
        <div className="card-box">
            <div className="card">
                <a href="https://victorvi007.github.io/calculator/">
                    <div className="card-head">
                        <img src={calculatorPng} alt=""/>
                    </div>
                    <div className="card-body">
                        <h4>Calculator</h4>
                        <p>A basic adding mechine </p>
                        <p>built with Html,Css,Scss,Javascript!</p>
                    </div>
                </a>
            
            </div>
            <div className="card">
                <a href="https://victorvi007.github.io/todo-check-list/">
                    <div className="card-head">
                        <img src={todoListPng} alt=""/>
                    </div>
                    <div className="card-body">
                        <h4>Todo check list</h4>
                        <p>A basic todo check list </p>
                        <p>Built with Html,Css,Scss,Javascript</p>
                    </div>
                </a>
            
            </div>
            <div className="card">
                <a href="https://victorvi007.github.io/Digital-clock/">
                    <div className="card-head">
                        <img src={digitalClockPng} alt=""/>
                    </div>
                    <div className="card-body">
                        <h4>Digital Clock</h4>
                        <p>A twelve hour clock, displaying time, day, month, year</p>
                        <p>Built with Html,Css,Scss,Javascript</p>
                    </div>
                </a>
            
            </div>
            <div className="card">
                <a href="https://victorvi007.github.io/movie-search-app/">
                    <div className="card-head">
                        <img src={movieSearchEnginPng} alt=""/>
                    </div>
                    <div className="card-body">
                        <h4>Movie Search Engin</h4>
                        <p>A movie and series search engin, Search by name and description of basicly any movie in the world😅</p>
                        <p>Built with Html,Css,Scss,Javascript,Api</p>
                    </div>
                </a>
            
            </div>
            <div className="card">
                <a href="https://victorvi007.github.io/country-search/">
                    <div className="card-head">
                        <img src={countrySearchPng} alt=""/>
                    </div>
                    <div className="card-body">
                        <h4>countrys Search Application</h4>
                        <p>A countrys search engin, Search and find details on any country </p>
                        <p>Built with Html,Css,Javascript,Api</p>
                    </div>
                </a>
            
            </div>
            <div className="card">
                <a href="https://victorvi007.github.io/victorukwuezeh/">
                    <div className="card-head">
                        <img src={portfolioPng} alt=""/>
                    </div>
                    <div className="card-body">
                        <h4>Portfolio website</h4>
                        <p>My portifolio website </p>
                        <p>Built with Html, Css, Scss, Javascript, React</p>
                    </div>
                </a>
            
            </div>
            <div className="card">
                <a href="https://victorvi007.github.io/quote-app/">
                    <div className="card-head">
                        <img src={quoteAppPng} alt=""/>
                    </div>
                    <div className="card-body">
                        <h4>Quote Application</h4>
                        <p>A Quote app that generates random quotes from famous people</p>
                        <p>Built with Html,Css,Javascript</p>
                    </div>
                </a>
            
            </div>
        </div>
       
       
    </div>
     );
}
 
export default Project;