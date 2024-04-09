import withNavigate from "../../../helpers/withNavigate";
import ProjectsDetailsPageContainer from "./ProjectsDetailsPageContainer";
import ProjectsDetailsPageStore from "./ProjectsDetailsPageStore";

export default ProjectsDetailsPageStore(withNavigate(ProjectsDetailsPageContainer));