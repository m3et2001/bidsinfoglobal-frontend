import withNavigate from "../../../helpers/withNavigate";
import ContractAwardsListPageContainer from "./ContractAwardsListPageContainer";
import ContractAwardsListPageStore from "./ContractAwardsListPageStore";

export default ContractAwardsListPageStore(withNavigate(ContractAwardsListPageContainer, true));