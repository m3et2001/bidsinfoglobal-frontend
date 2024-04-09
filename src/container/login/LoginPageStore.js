import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import cmsApis from "../../store/cms/cmsApis";
import mastersApis from "../../store/masters/mastersApis";

const mapStateToProps = (state) => {
    return {
        auth_record: cmsApis.endpoints.getAuthRecord.select({ type: "auth_record" })(state),
        country_all: mastersApis.endpoints.getCountryData.select()(state),
    }
}

const mapDispatch = {
    getAuthRecord: cmsApis.endpoints.getAuthRecord.initiate,
    getCountryData: mastersApis.endpoints.getCountryData.initiate,
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;