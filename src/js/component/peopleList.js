import React, { useEffect, useState } from "react";

const PeopleList = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        // Fetch data from SWAPI
        const fetchData = async () => {
          try {
            const response = await fetch("https://www.swapi.tech/api/people");
            const data = await response.json();
            setPeople(data.results);
          } catch (error) {
            console.error("Error fetching people:", error);
          }
        };  
        fetchData();
    }, []);
    
    return (
        <div>
          <h2>People</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {people.map((person, index) => (
              <div key={index} className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{person.name}</h5>
                    <p className="card-text">Height: {person.height}</p>
                    <p className="card-text">Mass: {person.mass}</p>
                    <p className="card-text">Gender: {person.gender}</p>
                    <button onClick={(event) => addToFavorites(event, item)}>Add to Favorites</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default PeopleList;