import React, { Fragment } from "react";
import FullScreenLoadingGrow from "../../components/common/FullScreenLoadingGrow";
import BreadCrumbs from "../../components/common/BreadCrumbs";

class AboutPageContainer extends React.Component {
    componentDidMount() {
        this.props.getAboutUsData({ type: "about_us_page" });
    }

    render() {
        const { data, isLoading } = this.props.about_us_page;

        if (isLoading) return <FullScreenLoadingGrow />;

        return (
            <Fragment>
                <BreadCrumbs main='About Us' current={"About Us"} />

                <main className='bodyMain'>
                    <section id='about' className='about'>
                        <div className='container' data-aos='fade-up'>
                            <div className='section-title'>
                                <h2>{data?.title_one}</h2>
                                <p>{data?.sub_title_one}</p>
                            </div>

                            <div className='row'>
                                <div
                                    className='col-lg-6 '
                                    data-aos='fade-right'
                                    data-aos-delay='100'
                                >
                                    <img
                                        src={data?.image_one}
                                        className='img-fluid'
                                        alt=''
                                    />
                                </div>
                                <div
                                    className='col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center'
                                    data-aos='fade-up'
                                    data-aos-delay='100'
                                >
                                    <h3>{data?.description_title_one}</h3>
                                    <p className='fst-italic'>
                                        {data?.description_one}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='about' className='about section-bg'>
                        <div className='container' data-aos='fade-up'>
                            <div className='section-title'>
                                <h2>About</h2>
                                <h3>{data?.title_two}</h3>
                                <p>{data?.sub_title_two}</p>
                            </div>

                            <div className='row'>
                                <div
                                    className='col-lg-7 pt-4 pt-lg-0 content d-flex flex-column justify-content-center'
                                    data-aos='fade-up'
                                    data-aos-delay='100'
                                >
                                    <ul className='cstm_list'>
                                        {data?.list_description &&
                                            data?.list_description.map(
                                                function (val, ind) {
                                                    return (
                                                        <li key={ind}>
                                                            <div className='abtflex'>
                                                                <h5>{val}</h5>
                                                            </div>
                                                        </li>
                                                    );
                                                }
                                            )}
                                    </ul>
                                </div>
                                <div
                                    className='col-lg-5 d-flex align-center'
                                    data-aos='fade-left'
                                    data-aos-delay='100'
                                >
                                    <img
                                        src={data?.image_two}
                                        className='img-fluid'
                                        alt=''
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

export default AboutPageContainer;
