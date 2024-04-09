import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import api from "../../store/cms/cmsApis";

const mapStateToProps = (state) => {
    return {
        service_page: api.endpoints.getServiceInfoData.select({ type: "service_page" })(state),
        service_records: api.endpoints.getServiceRecordData.select({ type: "service_records" })(state),
    }
}

const mapDispatch = {
    getServiceInfoData: api.endpoints.getServiceInfoData.initiate,
    getServiceRecordData: api.endpoints.getServiceRecordData.initiate,
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;