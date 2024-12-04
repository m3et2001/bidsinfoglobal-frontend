import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.jpg";
import { isAuth, signout } from "../../helpers/cookies";
import { isMobile } from 'react-device-detect';

function Header({
  sectors_data,
  sectors_data_loading,
  regions_data,
  regions_data_loading,
  cpv_codes_data,
  cpv_codes_data_loading,
  navigate,
}) {
  const [isActive, setIsActive] = useState(true);
  const [DropdownMenu, setDropdownMenu] = useState(null);

  const handleActionClick = (e, payload, type, url) => {
    e.preventDefault();
    navigate(url, { state: { [type]: [payload] } });
    if (isMobile)
    setIsActive(!isActive);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSignOut = (e) => {
    e.preventDefault();

    signout(() => window.location.reload());
    if (isMobile)
      setIsActive(!isActive);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  }

  const toggleClass = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    if (isMobile)
      setIsActive(!isActive);
  };

  const DropdownMenuOpen = (elementId) => {
    setDropdownMenu(elementId === DropdownMenu ? null : elementId);
  };

  return (
    <header id="header" className="d-flex align-items-center">
      <span className={`${isActive ? "ForMobileOnly spanClsoes menuClassHide" : "ForMobileOnly spanClsoes menuClassSHow"}`} onClick={() => toggleClass()}></span>
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="">
          <img src={logo} alt="main logo" className="logo" />
        </Link>

        <nav id="navbar" className={`${isActive ? "navbar" : "navbar-mobile"}`}>
          <ul>
            <li>
              <Link onClick={() => toggleClass()} to="">Home</Link>
            </li>
            <li>
              <Link onClick={() => toggleClass()} to="about">About Us</Link>
            </li>
            <li
              className={`dropdown ${DropdownMenu === "element1" ? "Open_dd_mobile" : ""
                }`}
              onClick={() => DropdownMenuOpen("element1")}
            >
              <Link to="/">
                <span>Tenders</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li className="dropdown">
                  <Link onClick={() => {toggleClass();window.location.reload();}} to={"/tenders-list"}>
                    <span>Tenders By Sector</span>
                  </Link>
                  <ul>
                    {sectors_data_loading ? (
                      <>Loading...</>
                    ) : (
                      sectors_data &&
                      sectors_data.map(function (val, ind) {
                        return (
                          <li key={ind}>
                            <Link
                              to={"/tenders-list"}
                              onClick={(e) =>
                                handleActionClick(
                                  e,
                                  val,
                                  "sectorVal",
                                  "/tenders-list"
                                )
                              }
                            >
                              {val.name}
                            </Link>
                          </li>
                        );
                      })
                    )}
                    <li>
                      <Link onClick={() => toggleClass()} to={"/tenders-by-sectors"} className="AllcatLink">
                        More...
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link onClick={() => toggleClass()} to={"/tenders-list"}>
                    <span>Tenders By Region</span>
                  </Link>
                  <ul>
                    {regions_data_loading ? (
                      <>Loading...</>
                    ) : (
                      regions_data &&
                      regions_data.map(function (val, ind) {
                        return (
                          <li key={ind}>
                            <Link
                              to={"/tenders-list"}
                              onClick={(e) =>
                                handleActionClick(
                                  e,
                                  val,
                                  "regionsVal",
                                  "/tenders-list"
                                )
                              }
                            >
                              {val.name}
                            </Link>
                          </li>
                        );
                      })
                    )}
                    <li>
                      <Link onClick={() => toggleClass()} to={"/tenders-by-regions"} className="AllcatLink">
                        More...
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="dropdown">
                  <Link onClick={() => toggleClass()} to={"/tenders-list"}>
                    <span>Tenders By Products/Services/CPV</span>
                  </Link>
                  <ul>
                    {cpv_codes_data_loading ? (
                      <>Loading...</>
                    ) : (
                      cpv_codes_data &&
                      cpv_codes_data.map(function (val, ind) {
                        return (
                          <li key={ind}>
                            <Link
                              to={"/tenders-list"}
                              onClick={(e) =>
                                handleActionClick(
                                  e,
                                  val,
                                  "cpvCodesVal",
                                  "/tenders-list"
                                )
                              }
                            >
                              {val.code}
                            </Link>
                          </li>
                        );
                      })
                    )}
                    <li>
                      <Link onClick={() => toggleClass()} to={"/tenders-by-cpvcodes"} className="AllcatLink">
                        More...
                      </Link>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </li>
            <li
              className={`dropdown ${DropdownMenu === "element2" ? "Open_dd_mobile" : ""
                }`}
              onClick={() => DropdownMenuOpen("element2")}
            >
              <Link to="/">
                <span>Project</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li className="dropdown">
                  <Link onClick={() => toggleClass()} to={"/projects-list"}>
                    <span>Project By Sector</span>
                  </Link>
                  <ul>
                    {sectors_data_loading ? (
                      <>Loading...</>
                    ) : (
                      sectors_data &&
                      sectors_data.map(function (val, ind) {
                        return (
                          <li key={ind}>
                            <Link
                              to={"/projects-list"}
                              onClick={(e) =>
                                handleActionClick(
                                  e,
                                  val,
                                  "sectorVal",
                                  "/projects-list"
                                )
                              }
                            >
                              {val.name}
                            </Link>
                          </li>
                        );
                      })
                    )}
                    <li>
                      <Link onClick={() => toggleClass()} to={"/projects-by-sectors"} className="AllcatLink">
                        More...
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link onClick={() => toggleClass()} to={"/projects-list"}>
                    <span>Project By Region</span>
                  </Link>
                  <ul>
                    {regions_data_loading ? (
                      <>Loading...</>
                    ) : (
                      regions_data &&
                      regions_data.map(function (val, ind) {
                        return (
                          <li key={ind}>
                            <Link
                              to={"/projects-list"}
                              onClick={(e) =>
                                handleActionClick(
                                  e,
                                  val,
                                  "regionsVal",
                                  "/projects-list"
                                )
                              }
                            >
                              {val.name}
                            </Link>
                          </li>
                        );
                      })
                    )}
                    <li>
                      <Link onClick={() => toggleClass()} to={"/projects-by-regions"} className="AllcatLink">
                        More...
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link onClick={() => toggleClass()} to={"contract-awards-list"}>Contract Awards</Link>
            </li>
            {/* <li>
              <Link onClick={() => toggleClass()} to={"grants-list"}>Grants</Link>
            </li> */}
            <li>
              <Link onClick={() => toggleClass()} to="service">Services</Link>
            </li>
            {
              isAuth()
                ?
                <li>
                  <Link onClick={() => toggleClass()} to="profile">Profile</Link>
                </li>
                :
                null
            }

            <li className="ForMobileOnly">
              <Link onClick={() => toggleClass()} to={'/advance-search'} >Advanced Search</Link>
            </li>
            {/* <li className="ForMobileOnly">
              <Link onClick={() => toggleClass()} to="EProcurement">E - Procurement</Link>
            </li> */}
            <li className="ForMobileOnly">
              <Link onClick={() => toggleClass()} to="contact">Contact Us</Link>
            </li>
            <li className="ForMobileOnly">
              <Link onClick={() => toggleClass()} to="subscribe">Subscribe</Link>
            </li>
            {isAuth() ? (
              <li className="ForMobileOnly">
                <Link
                  to="/"
                  onClick={(e) => handleSignOut(e)}
                  className="nav-link scrollto "
                >
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link onClick={() => toggleClass()} to="login" className="nav-link scrollto ">
                  Login / Register
                </Link>
              </li>
            )}
          </ul>
          <i
            className="bi bi-list mobile-nav-toggle clickEvent"
            onClick={() => toggleClass()}
          ></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
