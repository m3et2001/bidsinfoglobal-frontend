import withNavigate from "../../helpers/withNavigate";
import SubscribePageContainer from "./SubscribePageContainer";
import SubscribePageStore from "./SubscribePageStore";

export default SubscribePageStore(withNavigate(SubscribePageContainer));