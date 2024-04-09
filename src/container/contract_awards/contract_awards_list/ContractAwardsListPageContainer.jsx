import React, { Fragment } from "react";
import FullScreenLoadingGrow from "../../../components/common/FullScreenLoadingGrow";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import ContractAwardsListInfo from "../../../components/ContractAwards/ContractAwardsListInfo";
import ContractAwardsList from "../../../components/ContractAwards/ContractAwardsList";

class ContractAwardsListPageContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            contract_awards_loading: true,
            contract_awards_data: {},
        };
    }

    fetchContractAwards = async (payload) => {
        const { state } = this.props.location;

        if (state?.advance_search) {
            await this.props.advanceSearchFunction({
                ...state.filter,
                ...payload,
            });

            if (this.props.advance_search_response) {
                this.setState({
                    contract_awards_loading: false,
                    contract_awards_data: this.props.advance_search_response,
                });
            }
        } else {
            let contract_awardsRes = await this.props.getContractAwardsData(
                payload
            );
            if (contract_awardsRes.isSuccess) {
                this.setState({
                    contract_awards_loading: false,
                    contract_awards_data: contract_awardsRes.data,
                });
            }
        }
    };

    componentDidMount() {
        this.fetchContractAwards({
            pageNo: "0",
            limit: "15",
            sortBy: "1",
            sortField: "project_location",
        });
    }

    render() {
        if (this.state.sectors_loading) return <FullScreenLoadingGrow />;
        return (
            <Fragment>
                <BreadCrumbs
                    main='Contract Awards List'
                    current={"Contract Awards List"}
                />

                <main className='bodyMain'>
                    <section id='faq' className='faq'>
                        <div className='container' data-aos='fade-up'>
                            <ContractAwardsListInfo />
                        </div>
                    </section>
                    <section className='CategoryLst spacelr'>
                        <div className='container-fluid'>
                            <ContractAwardsList
                                {...this.props}
                                loading={this.state.contract_awards_loading}
                                data={this.state.contract_awards_data}
                                fetchContractAwards={this.fetchContractAwards}
                            />
                        </div>
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default ContractAwardsListPageContainer;
