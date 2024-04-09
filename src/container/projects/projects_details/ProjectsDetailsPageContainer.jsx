import React, { Fragment } from "react";
import FullScreenLoadingGrow from "../../../components/common/FullScreenLoadingGrow";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import NonAuthProjectsDetails from "../../../components/Projects/NonAuthProjectsDetails";

class ProjectsDetailsPageContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            not_found: false,
            projects_data: {},
        };
    }

    initialFunction = async () => {
        const project_id = this.props?.params?.project_id;

        if (project_id) {
            let res = await this.props.getProjectInfo({ project_id });
            if (res.isSuccess) {
                this.setState({
                    loading: false,
                    projects_data: res.data,
                    not_found: false,
                });
            }
        } else {
            this.setState({ not_found: true });
        }
    };

    componentDidMount() {
        this.initialFunction();
    }

    render() {
        if (this.state.loading) return <FullScreenLoadingGrow />;

        const { projects_data } = this.state;

        return (
            <Fragment>
                <BreadCrumbs main={"projects_data"} current={"Projects"} />

                <main className='bodyMain'>
                    <section id='faq' className='faq'>
                        <div className='container' data-aos='fade-up'>
                            <div className='section-title sectionList'>
                                <h3>
                                    Project <span>Information</span>
                                </h3>
                                <p>{projects_data?.project_background}</p>
                            </div>

                            <div className='row justify-content-center'>
                                <div className='col-md-12'>
                                    <NonAuthProjectsDetails {...this.state} />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </Fragment>
        );
    }
}

export default ProjectsDetailsPageContainer;
