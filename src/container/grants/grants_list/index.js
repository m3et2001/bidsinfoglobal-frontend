import withNavigate from "../../../helpers/withNavigate";
import GrantsListPageContainer from "./GrantsListPageContainer";
import GrantsListPageStore from "./GrantsListPageStore";

export default GrantsListPageStore(withNavigate(GrantsListPageContainer, true));