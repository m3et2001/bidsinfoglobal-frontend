import React, { Fragment } from "react";
import FullScreenLoadingGrow from "../../components/common/FullScreenLoadingGrow";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import LoginPageComponent from "../../components/LoginPageComponent";
import RegisterComponent from "../../components/RegisterComponent";
import { isAuth } from "../../helpers/cookies";

class LoginPageContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            show_forget_password: false,
        };
    }
    componentDidMount() {
        if (isAuth()) {
            window.location.href = "/";
        }
        this.props.getAuthRecord({ type: "auth_record" });
        this.props.getCountryData();
    }

    handleShowPassword = () => {
        this.setState({
            show_forget_password: !this.state.show_forget_password,
        });
    };

    render() {
        const { isLoading, data } = this.props.auth_record;

        if (isLoading) return <FullScreenLoadingGrow />;

        return (
            <Fragment>
                <BreadCrumbs main='Login Page' current='Login Page' />

                <main className='bodyMain'>
                    <section className='loginPage'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <LoginPageComponent
                                    login_description={data?.login_description}
                                    login_title={data?.login_title}
                                    forget_password={data?.forget_password}
                                    handleShowPassword={this.handleShowPassword}
                                    show={this.state.show_forget_password}
                                />
                                <RegisterComponent
                                    register_description={
                                        data?.register_description
                                    }
                                    register_title={data?.register_title}
                                    countryData={this.props.country_all?.data || []}
                                />
                            </div>
                        </div>
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default LoginPageContainer;
