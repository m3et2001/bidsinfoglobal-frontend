import React, { Fragment } from "react";
import FullScreenLoadingGrow from "../../../components/common/FullScreenLoadingGrow";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import ProjectsListInfo from "../../../components/Projects/ProjectsListInfo";
import ProjectsList from "../../../components/Projects/ProjectsList";

class ProjectsListPageContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            projects_loading: true,
            projects_data: {},
        };
    }

    fetchProjects = async (payload) => {
        const { state } = this.props.location;

        if (state?.advance_search) {
            await this.props.advanceSearchFunction({
                ...state.filter,
                ...payload,
            });

            if (this.props.advance_search_response) {
                this.setState({
                    projects_loading: false,
                    projects_data: this.props.advance_search_response,
                });
            }
        } else {
            if (state?.sectorVal && state.sectorVal.length > 0)
                payload.sectors = state.sectorVal
                    .map((val) => {
                        return val.name;
                    })
                    .join(",");

            if (state?.regionsVal && state.regionsVal.length > 0)
                payload.regions = state.regionsVal
                    .map((val) => {
                        return val.name;
                    })
                    .join(",");
            if (state?.cpvCodesVal && state.cpvCodesVal.length > 0)
                payload.cpv_codes = state.cpvCodesVal
                    .map((val) => {
                        return val.name;
                    })
                    .join(",");
            if (state?.keywords)
                payload.keywords = state.keywords;

            if (state?.country) {
                payload.country = state.country
                    .map((val) => {
                        return val.name;
                    })
                    .join(",");
            }

            let projectsRes = await this.props.getProjectsData(payload);
            if (projectsRes.isSuccess) {
                this.setState({
                    projects_loading: false,
                    projects_data: projectsRes.data,
                });
            }
        }
    };

    componentDidMount() {
        this.fetchProjects({
            pageNo: "0",
            limit: "15",
            sortBy: "1",
            sortField: "project_location",
        });
    }

    render() {
        if (this.state.sectors_loading) return <FullScreenLoadingGrow />;
        return (
            <Fragment>
                <BreadCrumbs main='Projects List' current={"Projects List"} />

                <main className='bodyMain'>
                    <section id='faq' className='faq'>
                        <div className='container' data-aos='fade-up'>
                            <ProjectsListInfo />
                        </div>
                    </section>
                    <section className='CategoryLst spacelr'>
                        <div className='container-fluid'>
                            <ProjectsList
                                {...this.props}
                                loading={this.state.projects_loading}
                                data={this.state.projects_data}
                                fetchProjects={this.fetchProjects}
                            />
                        </div>
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default ProjectsListPageContainer;
