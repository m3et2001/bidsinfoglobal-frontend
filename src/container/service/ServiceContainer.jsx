import React, { Fragment } from "react";
import FullScreenLoadingGrow from "../../components/common/FullScreenLoadingGrow";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import ServiceRecords from "../../components/ServiceRecords";

class ServiceContainer extends React.Component {
    componentDidMount() {
        this.props.getServiceInfoData({ type: "service_page" });
        this.props.getServiceRecordData({ type: "service_records" });
    }

    render() {
        const { data, isLoading } = this.props.service_page;

        if (isLoading) return <FullScreenLoadingGrow />;

        return (
            <Fragment>
                <BreadCrumbs main='Services' current={"Services"} />

                <main className='bodyMain'>
                    <section id='about' className='about pb-2'>
                        <div className='container' data-aos='fade-up'>
                            <div className='section-title fullwidth'>
                                <h2 className='pt-2'>{data?.title}</h2>
                                <p>{data?.description}</p>
                            </div>
                        </div>
                    </section>
                    <section
                        id='featured-services'
                        className='featured-services section-bg'
                    >
                        <div className='container' data-aos='fade-up'>
                            <div className='row'>
                                {this.props.service_records.data &&
                                    this.props.service_records.data.map(
                                        function (val, ind) {
                                            return (
                                                <ServiceRecords
                                                    key={ind}
                                                    title={val.title}
                                                    image={val.image}
                                                    description={
                                                        val.description
                                                    }
                                                />
                                            );
                                        }
                                    )}
                            </div>
                        </div>
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default ServiceContainer;
