// src/services/sw-api.js

const BASE_URL = 'https://swapi.dev/api/';

export function getAllStarships() {
  return fetch(`${BASE_URL}starships/`)
    .then(res => res.json())
    .then(data => data.results); // Extracting only the starship results
}
