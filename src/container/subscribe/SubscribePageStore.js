import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import authApis from "../../store/auth/authApis";
import { subscribePlan } from "../../store/common/commonSlice";

const mapStateToProps = (state) => {
    return {
        plan_list: authApis.endpoints.getPlanList.select()(state),
        submit_loading: state.common.submit_loading,
        success: state.common.success,
    }
}

const mapDispatch = {
    getPlanList: authApis.endpoints.getPlanList.initiate,
    subscribePlan,
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;