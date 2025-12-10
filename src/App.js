import './App.css';

import {BrowserRoute, Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className= "container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>     
    </div>
  );
}

export default App;
