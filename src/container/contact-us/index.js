import withNavigate from "../../helpers/withNavigate";
import ContactUsContainer from "./ContactUsContainer";
import ContactUsStore from "./ContactUsStore";

export default ContactUsStore(withNavigate(ContactUsContainer));