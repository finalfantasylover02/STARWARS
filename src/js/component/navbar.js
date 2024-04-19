import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const handleRemoveFavorite = (item) => {
        actions.removeFromFavorites(item);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Star Wars</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/planets">Planets</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/vehicles">Vehicles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/people">People</Link>
                        </li>
                        {/* Add more navigation links if needed */}
                    </ul>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Favorites
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {store.favorites.map((item, index) => (
                                <div key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                    <Link to={`/${item.type}/${item.id}`}>{item.name}</Link>
                                    <button className="btn btn-link" onClick={() => handleRemoveFavorite(item)}>x</button>
                                </div>
                            ))}
                            {store.favorites.length === 0 && <div className="dropdown-item">No favorites added</div>}
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/reading-list">Reading List</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};