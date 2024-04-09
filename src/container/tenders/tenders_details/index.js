import withNavigate from "../../../helpers/withNavigate";
import TendersDetailsPageContainer from "./TendersDetailsPageContainer";
import TendersDetailsPageStore from "./TendersDetailsPageStore";

export default TendersDetailsPageStore(withNavigate(TendersDetailsPageContainer));