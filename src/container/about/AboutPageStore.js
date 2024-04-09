import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import api from "../../store/cms/cmsApis";
// import { getCmsRecords } from "../../store/cms/cmsSlice-";

const mapStateToProps = (state) => {
    return {
        about_us_page: api.endpoints.getAboutUsData.select({ type: "about_us_page" })(state),
    }
}

const mapDispatch = {
    getAboutUsData: api.endpoints.getAboutUsData.initiate,
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;