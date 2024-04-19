import React, { useEffect, useState } from "react";

const PlanetsList = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        // Fetch data from SWAPI
        const fetchData = async () => {
          try {
            const response = await fetch("https://www.swapi.tech/api/planets");
            const data = await response.json();
            setPlanets(data.results);
          } catch (error) {
            console.error("Error fetching planets:", error);
          }
        };  
        fetchData();
    }, []);
    
    return (
        <div>
          <h2>Planets</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {planets.map((planet, index) => (
              <div key={index} className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{planet.name}</h5>
                    <p className="card-text">Climate: {planet.climate}</p>
                    <p className="card-text">Terrain: {planet.terrain}</p>
                    <p className="card-text">Population: {planet.population}</p>
                    <button onClick={(event) => addToFavorites(event, item)}>Add to Favorites</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default PlanetsList;