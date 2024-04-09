import withNavigate from "../../../helpers/withNavigate";
import ProjectsListPageContainer from "./ProjectsListPageContainer";
import ProjectsListPageStore from "./ProjectsListPageStore";

export default ProjectsListPageStore(withNavigate(ProjectsListPageContainer, true));