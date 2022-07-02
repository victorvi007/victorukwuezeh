import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
// import ''
import Footer from './Footer';
import Home from './Home';
// import './js/main';
import Navbar from './Navbar';
import Profile from './Profile';
import Project from './Project';
import Skills from './Skills';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/skills" element={<Skills/>}/>
                <Route path="/project" element={<Project/>}/>
            </Routes>
           
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
