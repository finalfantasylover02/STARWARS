import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/AppContext.js";

export const Navbar = () => {
  const { store } = useContext(Context);

  // Function to handle adding an item to favorites
  const addToFavorites = (item) => {
    actions.addToFavorites(item);
  };

  // Function to handle removing an item from favorites
  const removeFromFavorites = (item) => {
    actions.removeFromFavorites(item);
  };

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">React Boilerplate</span>
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Read Later
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {store.favorites.map((item, index) => (
              <a
                key={index}
                className="dropdown-item"
                href="#"
                onClick={() => removeFromFavorites(item)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
