import React, { useEffect, useState } from "react";

const VehiclesList = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        // Fetch data from SWAPI
        const fetchData = async () => {
          try {
            const response = await fetch("https://www.swapi.tech/api/vehicles");
            const data = await response.json();
            setVehicles(data.results);
          } catch (error) {
            console.error("Error fetching vehicles:", error);
          }
        };  
        fetchData();
    }, []);
    
    return (
        <div>
          <h2>Vehicles</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{vehicle.name}</h5>
                    <p className="card-text">Model: {vehicle.model}</p>
                    <p className="card-text">Manufacturer: {vehicle.manufacturer}</p>
                    <p className="card-text">Vehicle Class: {vehicle.vehicle_class}</p>
                    <button onClick={(event) => addToFavorites(event, item)}>Add to Favorites</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default VehiclesList;
