export const fetchPeople = async () => {
    try {
        const response = await fetch ("https://www.swapi.tech/api/people/");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching people", error);
        return null;
    }

};
export const fetchPlanet = async () => {
    try{
        const response = await fetch ("https://www.swapi.tech/api/planets");
        const data = await response.json();
        return data;
    } catch (error){
        console.error ("Error fetching planets", error);
        return null;
    }
};

export const fetchVehicles = async () => {
    try {
        const response = await fetch ("https://www.swapi.tech/api/vehicles");
        const data = await response.json();
        return data;
    } catch (error){
        console.error ("Error fetching vehicles", error);
        return null;
    }
};

export {fetchPeople , fetchPlanet , fetchVehicles}
