import React, { Fragment } from "react";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import AdvanceSearch from "../../components/AdvanceSearch/AdvanceSearch";

class AdvanceSearchContainer extends React.Component {
    handleSearch = async (values) => {
        // await this.props.advanceSearchFunction(values);

        if (values.notice_type === "Tender") {
            this.props.navigate("/tenders-list", {
                state: {
                    advance_search: true,
                    filter: values,
                },
            });
        } else if (values.notice_type === "Project") {
            this.props.navigate("/projects-list", {
                state: {
                    advance_search: true,
                    filter: values,
                },
            });
        } else if (values.notice_type === "Contract Award") {
            this.props.navigate("/contract-awards-list", {
                state: {
                    advance_search: true,
                    filter: values,
                },
            });
        } else if (values.notice_type === "Grants") {
            this.props.navigate("/grants-list", {
                state: {
                    advance_search: true,
                    filter: values,
                },
            });
        }
    };

    render() {
        const { advance_searching_loading } = this.props;
        return (
            <Fragment>
                <BreadCrumbs main='Advance Search' current={"Advance Search"} />
                <main className='bodyMain'>
                    <section
                        className='formContact section-bg'
                        id='advanceSerachBg'
                    >
                        <AdvanceSearch
                            {...this.props}
                            submit={this.handleSearch}
                            loading={advance_searching_loading}
                        />
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default AdvanceSearchContainer;
