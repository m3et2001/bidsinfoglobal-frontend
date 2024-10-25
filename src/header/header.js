import React, { Component } from "react";
import logo from "./logo.jpg";
import {BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div className="headermain">
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
                  <li>
                  {/* <li>
                    <Link to="EProcurement" className="nav-link scrollto ">
                      E - Procurement
                    </Link>                    
                  </li>                   */}
                  </li>
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
                  <li>
                    <Link to="termandcondition" className="nav-link scrollto ">
                      Terms & Condition
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
                          <Link to="AllTenderByRegion"className="AllcatLink">
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
                          <Link to="AllTenderByCPV"className="AllcatLink">
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
                          <Link to="AllProjectBySector"className="AllcatLink">
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
                          <Link to="AllProjectByRegion"className="AllcatLink">
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
        </Router>
      </div>
    );
  }
}
export default Header;
