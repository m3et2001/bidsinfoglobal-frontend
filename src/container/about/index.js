import withNavigate from "../../helpers/withNavigate";
import AboutPageContainer from "./AboutPageContainer";
import AboutPageStore from "./AboutPageStore";

export default AboutPageStore(withNavigate(AboutPageContainer));