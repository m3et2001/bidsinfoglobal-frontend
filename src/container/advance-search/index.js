import withNavigate from "../../helpers/withNavigate";
import AdvanceSearchContainer from "./AdvanceSearchContainer";
import AdvanceSearchStore from "./AdvanceSearchStore";

export default AdvanceSearchStore(withNavigate(AdvanceSearchContainer));