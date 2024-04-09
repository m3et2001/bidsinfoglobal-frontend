import withNavigate from "../../helpers/withNavigate";
import LoginPageContainer from "./LoginPageContainer";
import LoginPageStore from "./LoginPageStore";

export default LoginPageStore(withNavigate(LoginPageContainer));