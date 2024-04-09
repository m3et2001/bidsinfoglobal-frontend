import withNavigate from "../../../helpers/withNavigate";
import ProjectsBySectorsContainer from "./ProjectsBySectorsContainer";
import ProjectsBySectorsStore from "./ProjectsBySectorsStore";

export default ProjectsBySectorsStore(withNavigate(ProjectsBySectorsContainer));