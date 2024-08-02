import React, { Fragment, useState } from "react";
import FullScreenLoadingGrow from "../../../components/common/FullScreenLoadingGrow";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import TenderListInfo from "../../../components/Tenders/TenderListInfo";
import TendersList from "../../../components/Tenders/TendersList";

class TendersListPageContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      tenders_loading: true,
      tenders_data: {},
    };
  }

  fetchTenders = async (payload) => {
    const { state } = this.props.location;
    // const [tenderData,setTenderData] =useState({})
    this.setState({ tenders_loading: true, tenders_data: {} });

    if (state?.advance_search) {
      await this.props.advanceSearchFunction({
        ...state.filter,
        ...payload,
      });

      if (this.props.advance_search_response) {
        this.setState({
          tenders_loading: false,
          tenders_data: this.props.advance_search_response,
        });
      }
    } else {
      if (state?.sectorVal && state.sectorVal.length > 0)
        payload.sectors = state.sectorVal
          .map((val) => {
            return val.name;
          })
          .join(",");

      if (state?.regionsVal && state.regionsVal.length > 0)
        payload.regions = state.regionsVal
          .map((val) => {
            return val.name;
          })
          .join(",");
      if (state?.cpvCodesVal && state.cpvCodesVal.length > 0)
        payload.cpv_codes = state.cpvCodesVal
          .map((val) => {
            return val.name;
          })
          .join(",");
      if (state?.keywords) payload.keywords = state.keywords;

      if (state?.country) {
        payload.country = state.country
          .map((val) => {
            return val.name;
          })
          .join(",");
      }

      let tenderRes = await this.props.getTendersData(payload);
      if (tenderRes.isSuccess) {
        window.history.replaceState({}, document.title);
        // setTenderData(tenderRes.data)
        console.log(tenderRes.data);
        this.setState({
          tenders_loading: false,
          tenders_data: tenderRes.data,
        });
      }
    }
  };

  componentDidMount() {
    this.fetchTenders({
      pageNo: "0",
      limit: "15",
      sortBy: "1",
      sortField: "address",
    });
  }

  render() {
    if (this.state.sectors_loading) return <FullScreenLoadingGrow />;
    return (
      <Fragment>
        <BreadCrumbs main="Tenders List" current={"Tenders List"} />

        <main className="bodyMain">
          <section id="faq" className="faq">
            <div className="container" data-aos="fade-up">
              <TenderListInfo />
            </div>
          </section>
          <section className="CategoryLst spacelr">
            <div className="container-fluid">
              <TendersList
                {...this.props}
                loading={this.state.tenders_loading}
                data={this.state.tenders_data}
                // tenderData={tenderData}
                fetchTenders={this.fetchTenders}
              />
            </div>
          </section>
        </main>
      </Fragment>
    );
  }
}

export default TendersListPageContainer;
