import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const ProfileSidebar = ({ full_name, plans, last_logged_in, uuid }) => {
    return (
        <div className="homeLoginMain" id="afterLogin">
            <div className="section-title pb-0">
                <h3>My Profile</h3>
            </div>
            <div className="profileData">
                <div className="account-login-tile">
                    <h2>Account Information</h2>
                </div>
                <div className="account-login-Data">
                    <div className="account-login-des">
                        <i className="bi bi-people"></i> <strong>Name : </strong> {full_name}
                        {" "}(#{uuid || "00000"})
                    </div>
                    <div className="account-login-des">
                        <i className="bi bi-clock"></i> <strong>Last Login : </strong> {last_logged_in ? format(new Date(last_logged_in), "dd-MMM yyyy hh:mm:ss a") : "-"}
                    </div>
                    <div className="account-login-des">
                        <i className="bi bi-award"></i> <strong>Validty : </strong> {plans.plan_name !== "Free" ? format(new Date(plans.plan_expire_date), "dd-MMM yyyy hh:mm:ss a") : "Free"}
                    </div>
                </div>
            </div>
            <div className="profileData">
                <div className="account-login-tile">
                    <h2>My Dashboard</h2>
                </div>
                <div className="account-login-Data">
                    <div className="account-login-des">
                        <div className="account-login-des">
                            <Link to={"/profile"} className="visitiPeofile">
                                <i className="bi bi-globe"></i> My Profile
                            </Link>
                        </div>
                        <div className="account-login-des">
                            <Link to={'/business-profile'} className="visitiPeofile">
                                <i className="bi bi-globe"></i> My Business Profile
                            </Link>
                        </div>
                        <div className="prosLink">
                            <i className="bi bi-globe"></i>
                            <Link className="visitiPeofile" to={"/tenders-list"}>Tender</Link>
                        </div>
                        <div className="prosLink">
                            <i className="bi bi-globe"></i>
                            <Link className="visitiPeofile" to={"/projects-list"}>Project</Link>
                        </div>
                        <div className="prosLink">
                            <i className="bi bi-globe"></i>
                            <Link className="visitiPeofile" to={"/contract-awards-list"}>Contract Awards</Link>
                        </div>
                        <div className="prosLink">
                            <Link to={'/password'} className="visitiPeofile">
                                <i className="bi bi-globe"></i>Password
                            </Link>
                        </div>
                        <div className="prosLink">
                            <i className="bi bi-globe"></i>
                            <a className="visitiPeofile">Subscription </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileSidebar;