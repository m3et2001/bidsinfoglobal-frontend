import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import logo from "./logo.jpg";
import LoginPage from "./pages/login/loginPage";
import AboutPage from "./pages/about/aboutPage";
import Footer from "./footer/footer";
import ContactPage from "./pages/contact/contactPage";
import "./App.css";
import AllTenderByCPV from "./pages/tender/AllTenderByCPV";
import AllTenderByRegion from "./pages/tender/AllTenderByRegion";
import AllTenderBySector from "./pages/tender/AllTenderBySector";
import TenderListingBySector from "./pages/tender/TenderListingBySector";
import TenderListingByRegion from "./pages/tender/TenderListingByRegion";
import TenderListingByCPV from "./pages/tender/TenderListingByCPV";
import AllProjectBySector from "./pages/project/AllProjectBySector";
import AllProjectByRegion from "./pages/project/AllProjectByRegion";
import ProjectListingBySector from "./pages/project/ProjectListingBySector";
import ProjectListingByRegion from "./pages/project/ProjectListingByRegion";
import TenderDetails from "./pages/tender/TenderDetails";
import ProjectDetails from "./pages/project/ProjectDetails";
import ContractAwardDetails from "./pages/contaractAward/contaractAwardDetails";
import contaractAwardListing from "./pages/contaractAward/contaractAwardListing";
import subscribePage from "./pages/subscribe/subscribePage";
import ServicePage from "./pages/service/service";
import termandcondition from "./pages/termandcondition/termandcondition";
import grantsDetails from "./pages/grants/grantsDetails";
import EProcurement from "./pages/EProcurement/EProcurement";
import advanceSearch from "./pages/advanceSearch/advanceSearch";


function App() {
  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }
  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loaderPre");
      if (loaderElement) {
        loaderElement.remove();
      }
    });
  });

  return (
    <div className="WebsitePage">
      <div className="Wrapper">
        <Router>
          <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
              <div className="contact-info d-flex align-items-center">
                <i className="bi bi-envelope d-flex align-items-center">
                  <a href="mailto:contact@example.com">contact@example.com</a>
                </i>
                <i className="bi bi-phone d-flex align-items-center ms-4">
                  <span>+1 5589 55488 55</span>
                </i>
              </div>
              <div className="social-links d-none d-md-flex align-items-center">
                <ul className="d-flex topBarMenu">
                  <li>
                    <Link to="advanceSearch" className="nav-link scrollto ">
                      Advanced Search
                    </Link>
                  </li>
                  {/* <li>
                    <li>
                      <Link to="EProcurement" className="nav-link scrollto ">
                        E - Procurement
                      </Link>
                    </li>
                  </li> */}
                  <li>
                    <Link to="contact" className="nav-link scrollto ">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="subscribePage" className="nav-link scrollto ">
                      Subscribe
                    </Link>
                  </li>
                  <li>
                    <Link to="login" className="nav-link scrollto ">
                      Login / Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
              <Link to="">
                <img src={logo} alt="main logo" className="logo" />
              </Link>

              <nav id="navbar" className="navbar">
                <ul>
                  <li>
                    <Link to="">Home</Link>
                  </li>
                  <li>
                    <Link to="about">About Us</Link>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Tenders</span> <i className="bi bi-chevron-down"></i>
                    </a>
                    <ul>
                      <li className="dropdown">
                        <Link to="TenderListingBySector">
                          <span>Tenders By Sector</span>
                        </Link>
                        <ul>
                          <li>
                            <Link to="TenderDetails">
                              Defence
                            </Link>
                          </li>
                          <li>
                            <Link to="TenderDetails">
                              Telecommunication
                            </Link>
                          </li>
                          <li>
                            <Link to="TenderDetails">
                              Construction
                            </Link>
                          </li>
                          <li>
                            <Link to="TenderDetails">
                              Aviation
                            </Link>
                          </li>
                          <li>
                            <Link to="AllTenderBySector" className="AllcatLink">
                              More...
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="TenderListingByRegion">
                          <span>Tenders By Region</span>
                        </Link>
                        <ul>
                          <li>
                            <Link to="TenderDetails">Africa Tenders</Link>
                          </li>
                          <li>
                            <Link to="TenderDetails">Asia Pacific Tenders</Link>
                          </li>
                          <li>
                            <Link to="TenderDetails">Balkan Region Tenders</Link>
                          </li>
                          <li>
                            <Link to="TenderDetails">Europe Tenders</Link>
                          </li>
                          <li>
                            <Link to="AllTenderByRegion" className="AllcatLink">
                              More...
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="TenderListingByCPV">
                          <span>Tenders By Products/Services/CPV</span>
                        </Link>
                        <ul>
                          <li>
                            <Link to="TenderDetails">
                              Chemical products Tenders
                            </Link>
                          </li>
                          <li>
                            <Link to="TenderDetails">
                              Construction materials Tenders
                            </Link>
                          </li>
                          <li>
                            <Link to="TenderDetails">
                              Fabricated products and materials Tenders
                            </Link>
                          </li>
                          <li>
                            <Link to="TenderDetails">
                              Road construction works Tenders
                            </Link>
                          </li>
                          <li>
                            <Link to="AllTenderByCPV" className="AllcatLink">
                              More...
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Project</span> <i className="bi bi-chevron-down"></i>
                    </a>
                    <ul>
                      <li className="dropdown">
                        <Link to="ProjectListingBySector">
                          <span>Project By Sector</span>
                        </Link>
                        <ul>
                          <li>
                            <Link to="ProjectDetails">Defence</Link>
                          </li>
                          <li>
                            <Link to="ProjectDetails">Telecommunication</Link>
                          </li>
                          <li>
                            <Link to="ProjectDetails">Construction</Link>
                          </li>
                          <li>
                            <Link to="ProjectDetails">Aviation</Link>
                          </li>
                          <li>
                            <Link to="AllProjectBySector" className="AllcatLink">
                              More...
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="ProjectListingByRegion">
                          <span>Project By Region</span>
                        </Link>
                        <ul>
                          <li>
                            <Link to="ProjectDetails">Africa Projects</Link>
                          </li>
                          <li>
                            <Link to="ProjectDetails">Asia Pacific Projects</Link>
                          </li>
                          <li>
                            <Link to="ProjectDetails">Balkan Region Projects</Link>
                          </li>
                          <li>
                            <Link to="ProjectDetails">Europe Projects</Link>
                          </li>
                          <li>
                            <Link to="AllProjectByRegion" className="AllcatLink">
                              More...
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="contaractAwardDetails">
                      Contract Awards
                    </Link>
                  </li>
                  <li>
                    <Link to="grantsDetails">
                      Grants
                    </Link>
                  </li>
                  <li>
                    <Link to="ServicePage">
                      Services
                    </Link>
                  </li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>
            </div>
          </header>
          <Routes>
            <Route exact path="" Component={HomePage} />
            <Route path="about" Component={AboutPage} />
            <Route path="login" Component={LoginPage} />
            <Route path="contact" Component={ContactPage} />
            <Route path="TenderListingBySector" Component={TenderListingBySector} />
            <Route path="TenderListingByRegion" Component={TenderListingByRegion} />
            <Route path="TenderListingByCPV" Component={TenderListingByCPV} />
            <Route path="TenderDetails" Component={TenderDetails} />
            <Route path="contaractAwardListing" Component={contaractAwardListing} />
            <Route path="ProjectListingBySector" Component={ProjectListingBySector} />
            <Route path="ProjectListingByRegion" Component={ProjectListingByRegion} />
            <Route path="ProjectDetails" Component={ProjectDetails} />
            <Route path="AllProjectByRegion" Component={AllProjectByRegion} />
            <Route path="AllProjectBySector" Component={AllProjectBySector} />
            <Route path="AllTenderBySector" Component={AllTenderBySector} />
            <Route path="AllTenderByCPV" Component={AllTenderByCPV} />
            <Route path="AllTenderByRegion" Component={AllTenderByRegion} />
            <Route path="contaractAwardDetails" Component={ContractAwardDetails} />
            <Route path="subscribePage" Component={subscribePage} />
            <Route path="ServicePage" Component={ServicePage} />
            <Route path="termandcondition" Component={termandcondition} />
            <Route path="grantsDetails" Component={grantsDetails} />
            <Route path="EProcurement" Component={EProcurement} />
            <Route path="advanceSearch" Component={advanceSearch} />
          </Routes>
          <div className='footermain'>
            <footer id="footer">
              <div className="footer-top">
                <div className="container">
                  <div className="row">

                    <div className="col-lg-3 col-md-6 footer-contact">
                      <h3>Bidsinfoglobal</h3>
                      <p>
                        A108 Adam Street <br />
                        New York, NY 535022<br />
                        United States <br /><br />
                        <strong>Phone:</strong> +1 5589 55488 55<br />
                        <strong>Email:</strong> info@example.com<br />
                      </p>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                      <h4>Useful Links</h4>
                      <ul>
                        <li><i className="bx bx-chevron-right"></i>  <Link to="">Home</Link></li>
                        <li><i className="bx bx-chevron-right"></i> <Link to="about">About Us</Link></li>
                        <li><i className="bx bx-chevron-right"></i><Link to="advanceSearch">Advanced Search</Link></li>
                        <li><i className="bx bx-chevron-right"></i><Link to="Contact">Contact Us</Link></li>
                        <li><i className="bx bx-chevron-right"></i><Link to="login">Login / Register</Link></li>
                        <li><i className="bx bx-chevron-right"></i><Link to="termandcondition">Terms and condition </Link></li>
                      </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                      <h4>Our Services</h4>
                      <ul>
                        <li><i className="bx bx-chevron-right"></i><Link to="tender">Tenders</Link></li>
                        <li><i className="bx bx-chevron-right"></i><Link to="project">Project</Link></li>
                        <li><i className="bx bx-chevron-right"></i><Link to="contaractAward">Contract Awards</Link></li>
                        <li><i className="bx bx-chevron-right"></i><Link to="grantsDetails">Grants </Link></li>
                        <li><i className="bx bx-chevron-right"></i><Link to="subscribe">Subscribe</Link></li>
                        <li><i className="bx bx-chevron-right"></i><Link to="EProcurement">E - Procurement</Link></li>


                      </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                      <h4>Our Social Networks</h4>
                      <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                      <div className="social-links mt-3">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-whatsapp"></i></a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="container py-3">
                <div className="copyright">
                  &copy; Copyright <strong><span>Bidsinfoglobal</span></strong>. All Rights Reserved
                </div>
              </div>
            </footer>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
          </div>
        </Router>
      </div>
      <div id="preloader" className="loaderPre"></div>
    </div>
  );
}

export default App;
