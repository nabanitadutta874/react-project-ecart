import React from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import navbar from './Navbar';
import Home from './home/Home';
import Carts from './carts/Carts';

export default function App() {
  return (
    <Router>
      <navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/carts" component={Carts} />
      </Routes>
    </Router>
  );
}
