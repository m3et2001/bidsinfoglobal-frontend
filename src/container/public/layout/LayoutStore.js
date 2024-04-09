import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import cmsApis from "../../../store/cms/cmsApis";
import mastersApis from "../../../store/masters/mastersApis";

const mapStateToProps = (state) => {
  return {
    social_links: cmsApis.endpoints.getSocialLinks.select({ type: "social_links" })(state),
    contact_details: cmsApis.endpoints.getContactDetails.select({ type: "contact_details" })(state)
  };
};

const mapDispatch = {
  getSocialLinks: cmsApis.endpoints.getSocialLinks.initiate,
  getContactDetails: cmsApis.endpoints.getContactDetails.initiate,
  getSectorsData: mastersApis.endpoints.getSectorsData.initiate,
  getRegionsData: mastersApis.endpoints.getRegionsData.initiate,
  getCpvCodesData: mastersApis.endpoints.getCpvCodesData.initiate,
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(mapDispatch, dispatch);

const Store = (Container) =>
  connect(mapStateToProps, mapDispatchToProps)(Container);

export default Store;
