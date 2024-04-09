import withNavigate from "../../helpers/withNavigate";
import ServiceContainer from "./ServiceContainer";
import ServiceStore from "./ServiceStore";

export default ServiceStore(withNavigate(ServiceContainer));