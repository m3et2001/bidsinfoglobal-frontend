import withNavigate from "../../helpers/withNavigate";
import ProfilePageContainer from "./ProfilePageContainer";
import ProfilePageStore from "./ProfilePageStore";

export default ProfilePageStore(withNavigate(ProfilePageContainer));