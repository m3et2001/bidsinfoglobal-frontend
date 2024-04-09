import withNavigate from "../../helpers/withNavigate";
import EprocurementPageContainer from "./EprocurementPageContainer";
import EprocurementPageStore from "./EprocurementPageStore";

export default EprocurementPageStore(withNavigate(EprocurementPageContainer));