import React, { Fragment } from "react";
import FullScreenLoadingGrow from "../../../components/common/FullScreenLoadingGrow";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import GrantsDetails from "../../../components/Grants/GrantsDetails";

class GrantsDetailsPageContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            not_found: false,
            grants_data: {},
        };
    }

    initialFunction = async () => {
        const ref_no = this.props?.params?.ref_no;

        if (ref_no) {
            let res = await this.props.getGrantInfo({ ref_no });
            if (res.isSuccess) {
                this.setState({
                    loading: false,
                    grants_data: res.data,
                    not_found: false,
                });
            }
        } else {
            this.setState({ not_found: true });
        }
    };

    componentDidMount() {
        this.initialFunction();
    }

    render() {
        if (this.state.loading) return <FullScreenLoadingGrow />;

        const { grants_data } = this.state;

        return (
            <Fragment>
                <BreadCrumbs main={""} current={"Grants"} />

                <main className='bodyMain'>
                    <section id='faq' className='faq'>
                        <div className='container' data-aos='fade-up'>
                            <div className='section-title sectionList'>
                                <h3>
                                    Grant <span>Information</span>
                                </h3>
                                <p>{grants_data?.title}</p>
                            </div>

                            <div className='row justify-content-center'>
                                <div className='col-md-12'>
                                    <GrantsDetails {...this.state} />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default GrantsDetailsPageContainer;
