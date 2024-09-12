import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeatureCards />
    </div>
  );
}

export default App;
