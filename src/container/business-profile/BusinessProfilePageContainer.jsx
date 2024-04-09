import React from "react";
import ProfileSidebar from "../../components/home/ProfileSidebar";
import FullScreenLoadingGrow from "../../components/common/FullScreenLoadingGrow";
import BusinessProfileComponent from "../../components/auth/BusinessProfileComponent";
import { isAuth } from "../../helpers/cookies";

class BusinessProfilePageContainer extends React.Component {
    componentDidMount() {
        this.props.getCountryData();
        this.props.getBusinessProfile();
    }

    handleSubmit = (payload) => {
        this.props.submitBusinessProfile(payload);
    };

    render() {
        const { status, data } = this.props.profile;

        if (status !== "fulfilled") return <FullScreenLoadingGrow />;

        return (
            <main className='bodyMain'>
                <section className='profileInner'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-8 signupPagePadding'>
                                <div className='homeLoginMain'>
                                    <div className='section-title pb-0'>
                                        <h3>
                                            Business Profile Page
                                        </h3>
                                    </div>
                                    <div
                                        className='mainBoxLogin commonBoxShadow'
                                        id='loginBox'
                                    >
                                        <div className='section-title-p text-center loginBox'>
                                            <BusinessProfileComponent
                                                data={data}
                                                navigate={this.props.navigate}
                                                countryRecord={
                                                    this.props.country_all
                                                        .data || []
                                                }
                                                submit={this.handleSubmit}
                                                loading={
                                                    this.props.update_loading
                                                }
                                                success={this.props.success}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 bg-grey'>
                                <ProfileSidebar {...isAuth()} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default BusinessProfilePageContainer;
