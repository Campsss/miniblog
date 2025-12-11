import './App.css';

import {BrowserRoute, Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className= "container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

        </Routes>
      </div>
      <Footer />
      </BrowserRouter>     
    </div>
  );
}

export default App;
