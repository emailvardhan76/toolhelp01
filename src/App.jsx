import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background from './components/Background';

import Home from './pages/Home';
import Products from './pages/Products';
import AgentGenerator from './pages/tools/AgentGenerator';
import SystemDesign from './pages/tools/SystemDesign';
import TextToVideo from './pages/tools/TextToVideo';
import ProductDesign from './pages/tools/ProductDesign';

import UseCases from './pages/UseCases';
import Reviews from './pages/Reviews';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/usecases" element={<UseCases />} />
          <Route path="/reviews" element={<Reviews />} />

          {/* Tool Routes */}
          <Route path="/products/agent-generator" element={<AgentGenerator />} />
          <Route path="/products/system-design" element={<SystemDesign />} />
          <Route path="/products/text-to-video" element={<TextToVideo />} />
          <Route path="/products/product-design" element={<ProductDesign />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
