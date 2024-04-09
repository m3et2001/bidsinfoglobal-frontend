import withNavigate from "../../../helpers/withNavigate";
import TendersListPageContainer from "./TendersListPageContainer";
import TendersListPageStore from "./TendersListPageStore";

export default TendersListPageStore(withNavigate(TendersListPageContainer, true));