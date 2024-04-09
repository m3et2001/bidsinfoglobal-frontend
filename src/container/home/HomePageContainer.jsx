import React from "react";
import HomePageBanner from "../../components/home/HomePageBanner";
import TopCategories from "../../components/home/TopCategories";
import TopTenders from "../../components/home/TopTenders";
import FullScreenLoadingGrow from "../../components/common/FullScreenLoadingGrow";

class HomePageContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            show_forget_password: false,
            countryData: [],
        };
    }

    fetchFunction = async () => {
        let res = await this.props.getHomeCountryData({
            pageNo: "0",
            limit: "300",
            sortBy: "1",
            sortField: "name",
            by_tenders: true,
        });

        if (res?.isSuccess) {
            this.setState({ countryData: res.data });
        }
        this.props.getHomePageData({ type: "home_page" });
        this.props.getAuthRecord({ type: "auth_record" });
    };

    componentDidMount() {
        this.fetchFunction();
    }

    handleShowPassword = () => {
        this.setState({
            show_forget_password: !this.state.show_forget_password,
        });
    };

    render() {
        const { isLoading } = this.props.home_page;

        if (isLoading) return <FullScreenLoadingGrow />;

        return (
            <main className='bodyMain'>
                {/* Banner with map and login component */}
                <HomePageBanner
                    login_description={
                        this.props?.auth_record?.login_description
                    }
                    login_title={this.props?.auth_record?.login_title}
                    forget_password={this.props?.auth_record?.forget_password}
                    handleShowPassword={this.handleShowPassword}
                    show={this.state.show_forget_password}
                    countryData={this.state.countryData}
                    navigate={this.props.navigate}
                    params={this.props.params}
                    getSectorsData={this.props.getSectorsData}
                    getRegionsData={this.props.getRegionsData}
                    getCountryData={this.props.getCountryData}
                />

                <TopCategories data={this.props.home_page?.data} />

                <TopTenders data={this.props.home_page?.data} />
            </main>
        );
    }
}

export default HomePageContainer;
