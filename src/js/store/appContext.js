import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Initialize the context with null values
export const Context = React.createContext();


const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        // State to manage the context
        const [state, setState] = useState({
            store: {}, // Initialize store to an empty object
            actions: {} // Initialize actions to an empty object
        });

        // Initialize the state using getState function
        useEffect(() => {
            // Get the initial state using getState function
            const initialState = getState();

            // Set the initial state
            setState(prevState => ({
                ...prevState,
                store: initialState.store,
                actions: { ...initialState.actions }
            }));

            // Perform any additional initialization here (e.g., fetch data)
        }, []);

        // Function to update the context store
        const setStore = updatedStore => {
            setState(prevState => ({
                ...prevState,
                store: { ...prevState.store, ...updatedStore }
            }));
        };

        // Actions
        const addToFavorites = (event, item) => {
            event.preventDefault(); // Prevent default behavior of the event (e.g., form submission)
            // Check if item is already in favorites
            if (!state.store.favorites.includes(item)) {
                // Add item to favorites list in state
                setState({
                    store: { ...state.store, favorites: [...state.store.favorites, item] }
                });
            }
        };

        const removeFromFavorites = item => {
            // Remove item from favorites list in state
            setState({
                store: { ...state.store, favorites: state.store.favorites.filter(fav => fav !== item) }
            });
        };

        // Combine context state and actions into a single object
        const context = {
            ...state.store,
            actions: { ...state.actions, addToFavorites, removeFromFavorites },
            setStore
        };

        // Provide the context to the wrapped component
        return (
            <Context.Provider value={context}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };

    return StoreWrapper;
};

export default injectContext;