import React, { useState,useEffect } from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './Navbar';
import Home from './home/Home';
import Carts from './carts/Carts';
import 'bootstrap/dist/css/bootstrap.css';


export default function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <NavbarComponent count={count} />
      <Routes>
        <Route path="/" exact element={<Home setCount={setCount} />}  />
        <Route path="/home" element={<Home setCount={setCount} count={count} />}  />
        <Route path="/carts" element={<Carts />} />
      </Routes>
    </Router>
  );
}
