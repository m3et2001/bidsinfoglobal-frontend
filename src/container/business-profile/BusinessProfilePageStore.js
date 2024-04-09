import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import authApis from "../../store/auth/authApis";
import mastersApis from "../../store/masters/mastersApis";
import { submitBusinessProfile } from "../../store/common/commonSlice";

const mapStateToProps = (state) => {
    return {
        profile: authApis.endpoints.getBusinessProfile.select()(state),
        country_all: mastersApis.endpoints.getCountryData.select()(state),
        update_loading: state.common.update_loading,
        success: state.common.success,
    }
}

const mapDispatch = {
    getBusinessProfile: authApis.endpoints.getBusinessProfile.initiate,
    getCountryData: mastersApis.endpoints.getCountryData.initiate,
    submitBusinessProfile
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;