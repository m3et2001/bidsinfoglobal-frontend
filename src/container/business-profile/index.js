import withNavigate from "../../helpers/withNavigate";
import BusinessProfilePageContainer from "./BusinessProfilePageContainer";
import BusinessProfilePageStore from "./BusinessProfilePageStore";

export default BusinessProfilePageStore(withNavigate(BusinessProfilePageContainer));