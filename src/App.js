import React from 'react';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from './component/MainSection';
import ClientSection from './component/ClientSection';

function App() {
  return (
    <div>
      <Header />
      <MainSection />
      <ClientSection />
    </div>
  );
}

export default App;
