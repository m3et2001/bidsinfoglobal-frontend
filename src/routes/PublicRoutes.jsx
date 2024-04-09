import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import ProfilePage from "../pages/private/ProfilePage.jsx";
import BusinessProfilePage from "../pages/private/BusinessProfilePage.jsx";
import PasswordPage from "../pages/private/PasswordPage.jsx";

import HomePage from "../pages/public/HomePage.jsx";
import AboutPage from "../pages/public/AboutPage.jsx";
import LoginPage from "../pages/public/LoginPage.jsx";
import EprocurementPage from "../pages/public/EprocurementPage.jsx";
import ContactUsPage from "../pages/public/ContactUsPage.jsx";
import SubscribePage from "../pages/public/SubscribePage.jsx";
import ServicePage from "../pages/public/ServicePage.jsx";
import AdvanceSearch from "../pages/public/AdvanceSearch.jsx";

import TendersBySectors from "../pages/tenders/TendersBySectors.jsx";
import TendersByRegions from "../pages/tenders/TendersByRegions.jsx";
import TendersByCpvCodes from "../pages/tenders/TendersByCpvCodes.jsx";
import TendersListPage from "../pages/tenders/TendersListPage.jsx";
import TendersDetailsPage from "../pages/tenders/TendersDetailsPage.jsx";

import ProjectsBySectors from "../pages/projects/ProjectsBySectors.jsx";
import ProjectsByRegions from "../pages/projects/ProjectsByRegions.jsx";
import ProjectsListPage from "../pages/projects/ProjectsListPage.jsx";
import ProjectsDetailsPage from "../pages/projects/ProjectsDetailsPage.jsx";

import ContractAwardsListPage from "../pages/contract_awards/ContractAwardsListPage.jsx";
import ContractAwardsDetailsPage from "../pages/contract_awards/ContractAwardsDetailsPage.jsx";

import GrantsListPage from "../pages/grants/GrantsListPage.jsx";
import GrantsDetailsPage from "../pages/grants/GrantsDetailsPage.jsx";


import { isAuth } from "../helpers/cookies.js";

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/eprocurement' element={<EprocurementPage />} />
            <Route path='/contact' element={<ContactUsPage />} />
            <Route path='/subscribe' element={<SubscribePage />} />
            <Route path='/service' element={<ServicePage />} />

            <Route path='/advance-search' element={<AdvanceSearch />} />

            <Route path='/tenders-by-sectors' element={<TendersBySectors />} />
            <Route path='/tenders-by-regions' element={<TendersByRegions />} />
            <Route
                path='/tenders-by-cpvcodes'
                element={<TendersByCpvCodes />}
            />
            <Route path='/tenders-list' element={<TendersListPage />} />
            <Route path='/tenders/:ref_no' element={<TendersDetailsPage />} />

            <Route
                path='/projects-by-sectors'
                element={<ProjectsBySectors />}
            />
            <Route
                path='/projects-by-regions'
                element={<ProjectsByRegions />}
            />
            <Route path='/projects-list' element={<ProjectsListPage />} />
            <Route
                path='/projects/:project_id'
                element={<ProjectsDetailsPage />}
            />

            <Route
                path='/contract-awards-list'
                element={<ContractAwardsListPage />}
            />
            <Route
                path='/contract-awards/:ref_no'
                element={<ContractAwardsDetailsPage />}
            />

            <Route path='/grants-list' element={<GrantsListPage />} />
            <Route path='/grants/:ref_no' element={<GrantsDetailsPage />} />

            {isAuth() ? (
                <>
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route
                        path='/business-profile'
                        element={<BusinessProfilePage />}
                    />
                    <Route path='/password' element={<PasswordPage />} />
                </>
            ) : null}

            <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
    );
};

export default PublicRoutes;
