import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import cmsApis from "../../store/cms/cmsApis";
import mastersApis from "../../store/masters/mastersApis";
// import { getCmsRecords } from "../../store/cms/cmsSlice-";

const mapStateToProps = (state) => {
    return {
        home_page: cmsApis.endpoints.getHomePageData.select({ type: "home_page" })(state),
        auth_record: cmsApis.endpoints.getAuthRecord.select({ type: "auth_record" })(state),
    }
}

const mapDispatch = {
    getHomePageData: cmsApis.endpoints.getHomePageData.initiate,
    getAuthRecord: cmsApis.endpoints.getAuthRecord.initiate,
    getHomeCountryData: mastersApis.endpoints.getHomeCountryData.initiate,
    getRegionsData: mastersApis.endpoints.getRegionsData.initiate,
    getSectorsData: mastersApis.endpoints.getSectorsData.initiate,
    getCountryData: mastersApis.endpoints.getCountryData.initiate,
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;