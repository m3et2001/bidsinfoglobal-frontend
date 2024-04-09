import withNavigate from "../../../helpers/withNavigate";
import ContractAwardsDetailsPageContainer from "./ContractAwardsDetailsPageContainer";
import ContractAwardsDetailsPageStore from "./ContractAwardsDetailsPageStore";

export default ContractAwardsDetailsPageStore(withNavigate(ContractAwardsDetailsPageContainer));