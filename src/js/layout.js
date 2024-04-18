import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { PlanetDetail } from "./views/PlanetDetail.js";
import { VehicleDetail } from "./views/VehicleDetail.js";
import { PeopleDetail } from "./views/PeopleDetail.js";
import injectContext from "./store/AppContext.js";

import { Navbar } from "./component/navbar.js";
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
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/planets/:id" element={<PlanetDetail />} />
                        <Route path="/vehicles/:id" element={<VehicleDetail />} />
                        <Route path="/people/:id" element={<PeopleDetail />} />
                        <Route path="/single/:theid" element={<Single />} />
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