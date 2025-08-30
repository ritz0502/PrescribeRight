import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrescribeRightLandingPage from './PrescribeRightLandingPage';
import DisclaimerPage from './pages/DisclaimerPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the landing page */}
          <Route path="/" element={<PrescribeRightLandingPage />} />
          
          {/* Route for the disclaimer page */}
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          
          {/* Add more routes here for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;