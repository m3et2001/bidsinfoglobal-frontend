import React from "react";
import { Link } from "react-router-dom";
import { isAuth, signout } from "../../helpers/cookies";

function Topbar({ phone, email }) {
    const handleSignOut = (e) => {
        e.preventDefault();

        signout(() => window.location.reload());
    }
    return (
        <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-envelope d-flex align-items-center">
                        <a href={`mailto:${email}`}>{email}</a>
                    </i>
                    <i className="bi bi-phone d-flex align-items-center ms-4">
                        <span>{phone}</span>
                    </i>
                </div>
                <div className="social-links d-none d-md-flex align-items-center">
                    <ul className="d-flex topBarMenu">
                        <li>
                            <Link to={'/advance-search'} className="nav-link scrollto ">
                                Advanced Search
                            </Link>
                        </li>
                        <li>
                            <Link to="EProcurement" className="nav-link scrollto ">
                                E - Procurement
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" className="nav-link scrollto ">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to="subscribe" className="nav-link scrollto ">
                                Subscribe
                            </Link>
                        </li>
                        {
                            isAuth()
                                ?
                                <li>
                                    <Link to="/" onClick={(e) => handleSignOut(e)} className="nav-link scrollto ">
                                        Logout
                                    </Link>
                                </li>
                                :
                                <li>
                                    <Link to="login" className="nav-link scrollto ">
                                        Login / Register
                                    </Link>
                                </li>
                        }

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Topbar;