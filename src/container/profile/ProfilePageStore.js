import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import authApis from "../../store/auth/authApis";
import mastersApis from "../../store/masters/mastersApis";
import { submitCustomerProfile } from "../../store/common/commonSlice";

const mapStateToProps = (state) => {
    return {
        profile: authApis.endpoints.getCustomerProfile.select()(state),
        country_all: mastersApis.endpoints.getCountryData.select()(state),
        update_loading: state.common.update_loading,
        success: state.common.success,
    }
}

const mapDispatch = {
    getCustomerProfile: authApis.endpoints.getCustomerProfile.initiate,
    getCountryData: mastersApis.endpoints.getCountryData.initiate,
    submitCustomerProfile
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;