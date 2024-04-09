import withNavigate from "../../../helpers/withNavigate";
import ProjectsByRegionsContainer from "./ProjectsByRegionsContainer";
import ProjectsByRegionsStore from "./ProjectsByRegionsStore";

export default ProjectsByRegionsStore(withNavigate(ProjectsByRegionsContainer));