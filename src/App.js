import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Profile from './Profile';
import Project from './Project';
import Skills from './Skills';

function App() {
  return (
    <div className="container">
      <BrowserRouter baseName="/victorukwuezeh/">
      <Navbar/>
            <Routes>
                <Route path="/victorukwuezeh/" element={<Home/>}/>
                <Route path="/victorukwuezeh/profile" element={<Profile/>}/>
                <Route path="/victorukwuezeh/skills" element={<Skills/>}/>
                <Route path="/victorukwuezeh/project" element={<Project/>}/>
            </Routes>
           
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
