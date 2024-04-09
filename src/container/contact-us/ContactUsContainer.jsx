import React, { Fragment } from "react";
import FullScreenLoadingGrow from "../../components/common/FullScreenLoadingGrow";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import ContactForm from "../../components/ContactForm";

class ContactUsContainer extends React.Component {
    componentDidMount() {
        this.props.getContactDetails({ type: "contact_details" });
    }

    render() {
        const { data, isLoading } = this.props.contact_details;
        const {
            contact_us_submit_loading,
            contact_us_response,
            contactUsSubmit,
        } = this.props;

        if (isLoading) return <FullScreenLoadingGrow />;

        return (
            <Fragment>
                <BreadCrumbs main='Contact Us' current={"Contact Us"} />

                <main className='bodyMain'>
                    <section id='contact' className='contact'>
                        <div className='container' data-aos='fade-up'>
                            <div className='section-title'>
                                <h2>{data?.contact_title}</h2>
                                <p>{data?.contact_description}</p>
                            </div>

                            <div
                                className='row'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                <div className='col-lg-6'>
                                    <div className='info-box mb-4'>
                                        <i className='bx bx-map'></i>
                                        <h3>Our Address</h3>
                                        <p>{data?.address}</p>
                                    </div>
                                </div>

                                <div className='col-lg-3 col-md-6'>
                                    <div className='info-box  mb-4'>
                                        <i className='bx bx-envelope'></i>
                                        <h3>Email Us</h3>
                                        <p>{data?.email}</p>
                                    </div>
                                </div>

                                <div className='col-lg-3 col-md-6'>
                                    <div className='info-box  mb-4'>
                                        <i className='bx bx-phone-call'></i>
                                        <h3>Call Us</h3>
                                        <p>{data?.phone}</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className='row'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                <div className='col-lg-6 '>
                                    <iframe
                                        title='mapIcon'
                                        className='mb-4 mb-lg-0 mapFullView'
                                        src={data?.google_map_url}
                                        allowFullScreen
                                    ></iframe>
                                </div>

                                <div className='col-lg-6'>
                                    <ContactForm
                                        loading={contact_us_submit_loading}
                                        response={contact_us_response}
                                        submit={contactUsSubmit}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default ContactUsContainer;
