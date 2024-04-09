import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import PublicLayout from "../pages/public/layout/PublicLayout.jsx";
import ScrollToTop from "./ScrollToTop.js";

function Index() {

    return (
        <>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/*" element={<PublicLayout />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </Router>
        </>
    );
}

export default Index;
