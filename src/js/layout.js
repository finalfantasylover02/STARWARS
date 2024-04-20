import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from './store/appContext';
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import  PlanetDetail  from "./views/PlanetDetail";
import  VehicleDetail  from "./views/VehicleDetail";
import  PeopleDetail  from "./views/PeopleDetail";
import  PlanetList  from "./component/planetList";
import  VehicleList  from "./component/vehicleList";
import  PeopleList  from "./component/peopleList";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

// Create your Layout component
const Layout = () => {
    // The basename is used when your project is published in a subdirectory
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    {/* Include the Navbar component */}
                    <Navbar />
                    <Routes>
                        {/* Define routes for different views */}
                        <Route path="/" element={<Home />} />
                        <Route path="/planets" element={<PlanetList />} />
                        <Route path="/vehicles" element={<VehicleList />} /> 
                        <Route path="/people" element={<PeopleList />} />
                        <Route path="/planets/:id" element={<PlanetDetail />} />
                        <Route path="/vehicles/:id" element={<VehicleDetail />} />
                        <Route path="/people/:id" element={<PeopleDetail />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    {/* Include the Footer component */}
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

// Inject the context into the Layout component
export default injectContext(Layout);