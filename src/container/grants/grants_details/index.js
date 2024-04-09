import withNavigate from "../../../helpers/withNavigate";
import GrantsDetailsPageContainer from "./GrantsDetailsPageContainer";
import GrantsDetailsPageStore from "./GrantsDetailsPageStore";

export default GrantsDetailsPageStore(withNavigate(GrantsDetailsPageContainer));