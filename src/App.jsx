import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/1/')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Star Wars Character Data</h1>
      {data ? (
        <div>
          <p>Name: {data.name}</p>
          <p>Height: {data.height}</p>
          <p>Mass: {data.mass}</p>
          <p>Birth Year: {data.birth_year}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
