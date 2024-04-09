import withNavigate from "../../../helpers/withNavigate";
import TendersByCpvCodesContainer from "./TendersByCpvCodesContainer";
import TendersByCpvCodesStore from "./TendersByCpvCodesStore";

export default TendersByCpvCodesStore(withNavigate(TendersByCpvCodesContainer));