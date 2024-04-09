import { format, parseISO } from "date-fns";
import { handleDateDefault } from "../../helpers/utils";

export default function NonAuthProjectsDetails(props) {
    const { projects_data } = props;

    return (
        <ul className="faq-list">
            <li>
                <div
                    data-bs-toggle="collapse"
                    href="#TenderDetails"
                    className="question"
                >
                    Project Details
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                    id="TenderDetails"
                    className="collapse show"
                    data-bs-parent=".faq-list"
                >
                    <div className="pricing pdlr10">
                        <div className="row">
                            <div className="col-lg-12 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                                <div className="box">
                                    <h3>Project Name </h3>
                                    <p>{projects_data?.project_name}</p>
                                </div>
                            </div>
                            <div className="col-md-4 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                                <div className="box">
                                    <h3>Project Location</h3>
                                    <p>{projects_data?.project_location}</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                                <div className="box">
                                    <h3>Project Status</h3>
                                    <p>{projects_data?.project_status}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div
                    data-bs-toggle="collapse"
                    className="collapsed question"
                    href="#authortyContactDetails"
                >
                    Dates
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                    id="authortyContactDetails"
                    className="collapse"
                    data-bs-parent=".faq-list"
                >
                    <div className="pricing pdlr10">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                                <div className="box">
                                    <h3>Project Publishing Date</h3>
                                    <p>{handleDateDefault(projects_data?.project_publishing_date)}</p>
                                </div>
                            </div>
                            <div className="col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                                <div className="box">
                                    <h3>Estimated Project Completion Date</h3>
                                    <p>{handleDateDefault(projects_data?.estimated_project_completion_date)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div
                    data-bs-toggle="collapse"
                    href="#otherInformation"
                    className={`collapsed question ${projects_data?.client_name ? '' : 'cursor-not-allowed'}`}
                >
                    Project Financer & Client Details
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                    {
                        projects_data?.client_name
                            ?
                            ''
                            :
                            <i className='bi bi-lock-fill locIcons'></i>
                    }

                </div>
                <div
                    id="otherInformation"
                    className={`collapse`}
                    data-bs-parent=".faq-list"
                >
                    <div className="pricing pdlr10">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                                <div class="box">
                                    <h3>Client Name</h3>
                                    <p>{projects_data?.client_name}</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                                <div class="box">
                                    <h3>Client Address</h3>
                                    <p>{projects_data?.client_address}</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                                <div class="box">
                                    <h3>Financer Name</h3>
                                    <p>{projects_data?.funding_agency}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div
                    data-bs-toggle="collapse"
                    href="#otherInformationProject"
                    className="collapsed question"
                >
                    Other Information
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                    id="otherInformationProject"
                    className="collapse"
                    data-bs-parent=".faq-list"
                >
                    <div className="pricing pdlr10">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                                <div className="box">
                                    <h3>Sector</h3>
                                    <p>{projects_data?.sectors}</p>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 mgbtmxy" data-aos="fade-up" data-aos-delay="100">
                                <div className="box">
                                    <h3>CPV</h3>
                                    <p>{projects_data?.cpv_codes}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}