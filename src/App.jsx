// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import { getAllStarships } from './services/sw-api';

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    // Fetch all starships when the component mounts
    getAllStarships().then((starships) => setStarships(starships));
  }, []);

  return (
    <div>
      <h1>Star Wars Starships</h1>
      <div className="starship-container">
        {starships.length > 0 ? (
          starships.map((starship, index) => (
            <div key={index} className="starship-card">
              <p>{starship.name}</p>
            </div>
          ))
        ) : (
          <p>Loading starships...</p>
        )}
      </div>
    </div>
  );
};

export default App;
