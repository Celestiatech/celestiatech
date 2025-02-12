import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage"; // Create a HomePage component
import MobileAppDevelopment from "./pages/MobileAppDevelopment"; // Import the new page

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
