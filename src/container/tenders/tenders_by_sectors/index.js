import withNavigate from "../../../helpers/withNavigate";
import TendersBySectorsContainer from "./TendersBySectorsContainer";
import TendersBySectorsStore from "./TendersBySectorsStore";

export default TendersBySectorsStore(withNavigate(TendersBySectorsContainer));