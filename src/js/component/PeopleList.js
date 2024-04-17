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
          <ul>
            {people.map((person, index) => (
              <li key={index}>{person.name}</li>
            ))}
          </ul>
        </div>
      );
    };
    
export default PeopleList;