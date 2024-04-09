import { Link, useLocation } from "react-router-dom";
import { isAuth } from "../../helpers/cookies";
import SearchBar from "./SearchBar";
import ForgetPassword from "../common/ForgetPassword";
import Login from "../common/Login";
import WorldMap from "react-svg-worldmap";
import ProfileSidebar from "./ProfileSidebar";
import ResetPassword from "../common/ResetPassword";

function HomePageBanner({ login_title, login_description, forget_password, handleShowPassword, show, countryData, navigate, params, getRegionsData, getSectorsData, getCountryData }) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const handleClick = (e) => {
        if (e.countryValue) {
            let country = countryData.find((obj) => obj.str_code === e.countryCode);
            console.log(country, "country");
            navigate("/tenders-list", { state: { country: [country] } })
        }
    }

    return (
        <section className="mainBanner p-0">
            <div className="container-fluid">
                <div className="row">
                    <div className={`col-md-8 px-0 flevalgin`}>
                        <WorldMap
                            color="#003c5e"
                            borderColor="#003c5e"
                            size="responsive"
                            data={countryData}
                            richInteraction
                            onClickFunction={(e) => handleClick(e)}
                        />
                        <SearchBar navigate={navigate} getRegionsData={getRegionsData} getSectorsData={getSectorsData} getCountryData={getCountryData} />
                    </div>
                    {
                        queryParams.get("token") && queryParams.get("reset") === "password"
                            ?
                            <div className="col-md-4 bg-grey">
                                <div className="homeLoginMain">
                                    <div className="section-title pb-0">
                                        <h3>Reset Password</h3>
                                    </div>
                                    <ResetPassword token={queryParams.get("token")} />
                                </div>
                            </div>
                            :
                            !isAuth() ?
                                <div className="col-md-4 bg-grey">
                                    <div className="homeLoginMain">
                                        <div className="section-title pb-0">
                                            <h3>{login_title}</h3>
                                        </div>
                                        <Login
                                            login_description={login_description}
                                            handleShowPassword={() => handleShowPassword()}
                                            hide={show}
                                        />
                                        <ForgetPassword
                                            forget_password={forget_password}
                                            show={show}
                                            handleShowPassword={() => handleShowPassword()}
                                        />
                                        <Link className="loginBottom" to={"/login"}>
                                            <div className="loginbtmtext text-center">
                                                <span className="d-block createLink">
                                                    Click for New User
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                :
                                <div className="col-md-4 bg-grey">
                                    <ProfileSidebar {...isAuth()} />
                                </div>
                    }

                </div>
            </div >
        </section >
    )
}

export default HomePageBanner;