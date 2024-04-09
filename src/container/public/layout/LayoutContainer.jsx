import React from "react";
import BaseLayout from "../../../components/public/BaseLayout";
import PublicRoutes from "../../../routes/PublicRoutes";

class LayoutContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            sectors_loading: true,
            sectors_data: null,
            regions_loading: true,
            regions_data: null,
            cpv_codes_loading: true,
            cpv_codes_data: null,
        };
    }

    InitialFunction = async () => {
        let sectorsRes = await this.props.getSectorsData({
            pageNo: "0",
            limit: "4",
            sortBy: "1",
            sortField: "name",
        });
        if (sectorsRes.isSuccess) {
            this.setState({
                sectors_loading: false,
                sectors_data: sectorsRes.data?.result,
            });
        }
        let regionsRes = await this.props.getRegionsData({
            pageNo: "0",
            limit: "4",
            sortBy: "1",
            sortField: "name",
        });
        if (regionsRes.isSuccess) {
            this.setState({
                regions_loading: false,
                regions_data: regionsRes.data?.result,
            });
        }
        let cpvCodesRes = await this.props.getCpvCodesData({
            pageNo: "0",
            limit: "4",
            sortBy: "1",
            sortField: "code",
        });
        if (cpvCodesRes.isSuccess) {
            this.setState({
                cpv_codes_loading: false,
                cpv_codes_data: cpvCodesRes.data?.result,
            });
        }
    };

    componentDidMount() {
        this.props.getSocialLinks({ type: "social_links" });
        this.props.getContactDetails({ type: "contact_details" });
        this.InitialFunction();
    }

    render() {
        const { isLoading } = this.props.social_links;

        if (isLoading) return <></>;

        return (
            <BaseLayout
                params={this.props.params}
                ChildComponent={PublicRoutes}
                social_links={this.props.social_links?.data}
                contactDetails={this.props.contact_details?.data}
                sectors_data={this.state.sectors_data}
                sectors_data_loading={this.state.sectors_loading}
                regions_data={this.state.regions_data}
                regions_data_loading={this.state.regions_loading}
                cpv_codes_data={this.state.cpv_codes_data}
                cpv_codes_data_loading={this.state.cpv_codes_loading}
                navigate={this.props.navigate}
            />
        );
    }
}

export default LayoutContainer;
