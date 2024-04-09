import withNavigate from "../../helpers/withNavigate";
import PasswordPageContainer from "./PasswordPageContainer";
import PasswordPageStore from "./PasswordPageStore";

export default PasswordPageStore(withNavigate(PasswordPageContainer));