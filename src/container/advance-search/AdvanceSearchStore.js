import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import mastersApis from "../../store/masters/mastersApis";
import { advanceSearchFunction } from "../../store/common/commonSlice";

const mapStateToProps = (state) => {
    return {
        advance_searching_loading: state.common.advance_searching_loading,
        advance_search_response: state.common.advance_search_response,
    }
}

const mapDispatch = {
    getSectorsData: mastersApis.endpoints.getSectorsData.initiate,
    getCpvCodesData: mastersApis.endpoints.getCpvCodesData.initiate,
    getCountryData: mastersApis.endpoints.getCountryData.initiate,
    getRegionsData: mastersApis.endpoints.getRegionsData.initiate,
    getStatesData: mastersApis.endpoints.getStatesData.initiate,
    getGrantsData: mastersApis.endpoints.getGrantsData.initiate,
    getFundingAgencyData: mastersApis.endpoints.getFundingAgencyData.initiate,
    advanceSearchFunction
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;