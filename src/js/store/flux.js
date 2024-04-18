const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [] // Initialize favorites array in the store
		},
		actions: {
			addToFavorites: item => {
				const store = getStore();
				const updatedFavorites = [...store.favorites, item];
				setStore({ favorites: updatedFavorites });
			},
			removeFromFavorites: itemToRemove => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter(item => item !== itemToRemove);
				setStore({ favorites: updatedFavorites });
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			}
		}
	};
};

export default getState;