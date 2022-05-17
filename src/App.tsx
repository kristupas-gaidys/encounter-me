import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Trail from './components/Trail';
import TrailList from './components/TrailList';
import Navbar from './Navbar';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="trails" element={<TrailList />} />
          <Route path="trails/:id" element={<Trail />} />
        </Routes>
      </Router>
    </div>
  );
}
