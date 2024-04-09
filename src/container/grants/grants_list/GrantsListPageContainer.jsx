import React, { Fragment } from "react";
import FullScreenLoadingGrow from "../../../components/common/FullScreenLoadingGrow";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import GrantsListInfo from "../../../components/Grants/GrantsListInfo";
import GrantsList from "../../../components/Grants/GrantsList";

class GrantsListPageContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            grants_loading: true,
            grants_data: {},
        };
    }

    fetchGrants = async (payload) => {
        const { state } = this.props.location;

        if (state?.advance_search) {
            await this.props.advanceSearchFunction({
                ...state.filter,
                ...payload,
            });

            if (this.props.advance_search_response) {
                this.setState({
                    grants_loading: false,
                    grants_data: this.props.advance_search_response,
                });
            }
        } else {
            let grantsRes = await this.props.getGrantsData(payload);
            if (grantsRes.isSuccess) {
                this.setState({
                    grants_loading: false,
                    grants_data: grantsRes.data,
                });
            }
        }
    };

    componentDidMount() {
        this.fetchGrants({
            pageNo: "0",
            limit: "15",
            sortBy: "1",
            sortField: "location",
        });
    }

    render() {
        if (this.state.sectors_loading) return <FullScreenLoadingGrow />;
        return (
            <Fragment>
                <BreadCrumbs main='Grants List' current={"Grants List"} />

                <main className='bodyMain'>
                    <section id='faq' className='faq'>
                        <div className='container' data-aos='fade-up'>
                            <GrantsListInfo />
                        </div>
                    </section>
                    <section className='CategoryLst spacelr'>
                        <div className='container-fluid'>
                            <GrantsList
                                {...this.props}
                                loading={this.state.grants_loading}
                                data={this.state.grants_data}
                                fetchGrants={this.fetchGrants}
                            />
                        </div>
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default GrantsListPageContainer;
