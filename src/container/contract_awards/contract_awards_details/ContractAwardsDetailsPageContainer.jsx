import React, { Fragment } from "react";
import FullScreenLoadingGrow from "../../../components/common/FullScreenLoadingGrow";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import ContractAwardsDetails from "../../../components/ContractAwards/ContractAwardsDetails";

class ContractAwardsDetailsPageContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            not_found: false,
            contract_awards_data: {},
        };
    }

    initialFunction = async () => {
        const ref_no = this.props?.params?.ref_no;

        if (ref_no) {
            let res = await this.props.getContractAwardInfo({ ref_no });
            if (res.isSuccess) {
                this.setState({
                    loading: false,
                    contract_awards_data: res.data,
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

        const { contract_awards_data } = this.state;

        return (
            <Fragment>
                <BreadCrumbs
                    main={"contract_awards_data"}
                    current={"ContractAwards"}
                />

                <main className='bodyMain'>
                    <section id='faq' className='faq'>
                        <div className='container' data-aos='fade-up'>
                            <div className='section-title sectionList'>
                                <h3>
                                    Contract Award <span>Information</span>
                                </h3>
                                <p>
                                    {
                                        contract_awards_data?.contract_award_background
                                    }
                                </p>
                            </div>

                            <div className='row justify-content-center'>
                                <div className='col-md-12'>
                                    <ContractAwardsDetails
                                        {...this.state}
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

export default ContractAwardsDetailsPageContainer;
