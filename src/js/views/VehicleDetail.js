import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';

const VehicleDetail = ({ match }) => {
  const { actions } = useContext(Context);
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/vehicles/${match.params.id}`);
        const data = await response.json();
        setVehicle(data.result.properties);
      } catch (error) {
        console.error('Error fetching vehicle:', error);
      }
    };

    fetchVehicle();
  }, [match.params.id]);

  const handleAddToFavorites = () => {
    actions.addToFavorites(vehicle);
  };

  const handleRemoveFromFavorites = () => {
    actions.removeFromFavorites(vehicle);
  };

  return (
    <div>
      {vehicle ? (
        <div>
          <h2>{vehicle.name}</h2>
          <p>Model: {vehicle.model}</p>
          <p>Manufacturer: {vehicle.manufacturer}</p>
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

export default VehicleDetail;
