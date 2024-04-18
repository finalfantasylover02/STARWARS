import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/AppContext';

const PeopleDetail = ({ match }) => {
  const { actions } = useContext(Context);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/people/${match.params.id}`);
        const data = await response.json();
        setPerson(data.result.properties);
      } catch (error) {
        console.error('Error fetching person:', error);
      }
    };

    fetchPerson();
  }, [match.params.id]);

  const handleAddToFavorites = () => {
    actions.addToFavorites(person);
  };

  const handleRemoveFromFavorites = () => {
    actions.removeFromFavorites(person);
  };

  return (
    <div>
      {person ? (
        <div>
          <h2>{person.name}</h2>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
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

export default PeopleDetail;
