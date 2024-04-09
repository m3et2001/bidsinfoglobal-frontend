import withNavigate from "../../../helpers/withNavigate";
import TendersByRegionsContainer from "./TendersByRegionsContainer";
import TendersByRegionsStore from "./TendersByRegionsStore";

export default TendersByRegionsStore(withNavigate(TendersByRegionsContainer));