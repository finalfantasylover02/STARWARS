import React from "react";
import  PlanetList  from "../component/planetList";
import  VehicleList  from "../component/vehicleList";
import  PeopleList  from "../component/peopleList";
import "../../styles/home.css";

export const Home = () => (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-4">
                <h2>Planets</h2>
                <PlanetList />
            </div>
            <div className="col-md-4">
                <h2>Vehicles</h2>
                <VehicleList />
            </div>
            <div className="col-md-4">
                <h2>People</h2>
                <PeopleList />
            </div>
        </div>
    </div>
);
