import React, { Fragment } from "react";
import FullScreenLoadingGrow from "../../components/common/FullScreenLoadingGrow";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import ExprocurementRecords from "../../components/EprocurementRecords";
import DropDemoForm from "../../components/DropDemoForm";

class EprocurementPageContainer extends React.Component {
    componentDidMount() {
        this.props.getEprocurementPageData({ type: "eprocurment_page" });
        this.props.getEprocurementRecordData({ type: "eprocurment_records" });
        this.props.getCountryData();
    }

    handleDropDemoSubmit = (payload) => {
        this.props.dropDemoRequestSubmit(payload);
    };

    render() {
        const { data, isLoading } = this.props.eprocurment_page;
        const { drop_demo_submit_loading, drop_demo_response } = this.props;

        if (isLoading) return <FullScreenLoadingGrow />;

        return (
            <Fragment>
                <BreadCrumbs
                    main='E - Procurement'
                    current={"E - Procurement"}
                />

                <main className='bodyMain'>
                    <section id='about' className='about pb-2'>
                        <div className='container' data-aos='fade-up'>
                            <div className='section-title fullwidth'>
                                <h2 className='pt-2'>{data?.title}</h2>
                                <p>{data?.description}</p>
                            </div>
                        </div>
                    </section>

                    <section id='about' className='about section-bg iconPlost'>
                        <div className='container' data-aos='fade-up'>
                            <div className='row'>
                                {this.props.eprocurment_records.data &&
                                    this.props.eprocurment_records.data.map(
                                        function (val, ind) {
                                            return (
                                                <ExprocurementRecords
                                                    label={val.label}
                                                    icon={val.icon}
                                                    key={ind}
                                                />
                                            );
                                        }
                                    )}
                            </div>
                        </div>
                    </section>

                    <section className='formContact'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-12 signupPagePadding'>
                                    <div className='homeLoginMain'>
                                        <div className='section-title pb-0'>
                                            <h3>{data?.drop_demo_title}</h3>
                                        </div>

                                        {/* Login Div Start here  */}
                                        <div
                                            className='mainBoxLogin commonBoxShadow'
                                            id='loginBox'
                                        >
                                            <div className='section-title-p text-center loginBox'>
                                                <p className='wid100'>
                                                    {
                                                        data?.drop_demo_description
                                                    }
                                                </p>
                                                <DropDemoForm
                                                    loading={
                                                        drop_demo_submit_loading
                                                    }
                                                    response={
                                                        drop_demo_response
                                                    }
                                                    onSubmit={
                                                        this
                                                            .handleDropDemoSubmit
                                                    }
                                                    countryRecord={
                                                        this.props.country_all
                                                            .data || []
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default EprocurementPageContainer;
