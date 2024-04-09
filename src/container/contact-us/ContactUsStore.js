import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import cmsApis from "../../store/cms/cmsApis";
import { contactUsSubmit } from "../../store/common/commonSlice";

const mapStateToProps = (state) => {
    return {
        contact_details: cmsApis.endpoints.getContactDetails.select({ type: "contact_details" })(state),
        contact_us_submit_loading: state.common.contact_us_submit_loading,
        contact_us_response: state.common.contact_us_response,
    }
}

const mapDispatch = {
    getContactDetails: cmsApis.endpoints.getContactDetails.initiate,
    contactUsSubmit,
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;