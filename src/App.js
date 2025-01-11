import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/Pages/About';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to CelestiaTech</h1>
        <p>Web Development Services & SEO</p>
      </header>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
    
  );
}

export default App;
