import withNavigate from "../../helpers/withNavigate";
import HomePageContainer from "./HomePageContainer";
import HomePageStore from "./HomePageStore";

export default HomePageStore(withNavigate(HomePageContainer));