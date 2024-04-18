import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/AppContext';

const PlanetDetail = ({ match }) => {
  const { actions } = useContext(Context);
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/planets/${match.params.id}`);
        const data = await response.json();
        setPlanet(data.result.properties);
      } catch (error) {
        console.error('Error fetching planet:', error);
      }
    };

    fetchPlanet();
  }, [match.params.id]);

  const handleAddToFavorites = () => {
    actions.addToFavorites(planet);
  };

  const handleRemoveFromFavorites = () => {
    actions.removeFromFavorites(planet);
  };

  return (
    <div>
      {planet ? (
        <div>
          <h2>{planet.name}</h2>
          <p>Climate: {planet.climate}</p>
          <p>Terrain: {planet.terrain}</p>
          {/* Render other details */}
          <div>
            <button onClick={handleAddToFavorites}>Add to Favorites</button>
            <button onClick={handleRemoveFromFavorites}>Remove from Favorites</button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PlanetDetail;
