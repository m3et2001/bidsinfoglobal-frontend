import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updatePassword } from "../../store/common/commonSlice";

const mapStateToProps = (state) => {
    return {
        update_loading: state.common.update_loading,
        success: state.common.success,
        error: state.common.error,
    }
}

const mapDispatch = {
    updatePassword
};

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
    connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;