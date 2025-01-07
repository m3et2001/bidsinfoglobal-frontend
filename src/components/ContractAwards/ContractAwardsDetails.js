import { format, parseISO } from "date-fns";
import { handleDateDefault } from "../../helpers/utils";

export default function ContractAwardsDetails(props) {
    const { contract_awards_data } = props;

    return (
        <ul className="faq-list">
            <li>
                <div
                    href="#ContractAwardDetails"
                    className={`question ${contract_awards_data?.org_name ? '' : 'cursor-not-allowed'}`}
                >
                    Authority Name & Address
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                    {
                        contract_awards_data?.org_name
                            ?
                           ''
                            :
                            <i className='bi bi-lock-fill locIcons'></i>
                    }
                </div>
                <div
                    id="ContractAwardDetails"
                    className={`collapse ${contract_awards_data?.org_name ? 'show' : ''}`}
                    data-bs-parent=".faq-list"
                >
                    {
                        contract_awards_data?.org_name
                            ?
                            <div className="pricing pdlr10">
                                <div className="row">
                                    <div
                                        className="col-lg-3 col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Organization Name</h3>
                                            <p>{contract_awards_data?.org_name}</p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Organization Address</h3>
                                            <p>{contract_awards_data?.org_address}</p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-3 col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Telephone</h3>
                                            <p>{contract_awards_data?.telephone_no}</p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-3 col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>FAX Number</h3>
                                            <p>{contract_awards_data?.fax_number}</p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-3 col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Email</h3>
                                            <p>{contract_awards_data?.email}</p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-3 col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Contact Person</h3>
                                            <p>{contract_awards_data?.contact_person}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
            </li>

            <li>
                <div
                    data-bs-toggle="collapse"
                    className="collapsed question"
                    href="#authortyContactDetails"
                >
                    Contract Awards Details
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                    id="authortyContactDetails"
                    className={`collapse ${contract_awards_data?.org_name ? '' : 'show'}`}
                    data-bs-parent=".faq-list"
                >
                    <div className="pricing pdlr10">
                        <div className="row">
                            <div
                                className="col-lg-3 col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>BIG Ref No</h3>
                                    <p>{contract_awards_data?.big_ref_no}</p>
                                </div>
                            </div>
                            {
                                contract_awards_data?.bidding_type
                                    ?
                                    <div
                                        className="col-lg-3 col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Bidding Type</h3>
                                            <p>{contract_awards_data?.bidding_type}</p>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            {
                                contract_awards_data?.project_location
                                    ?
                                    <div
                                        className="col-lg-3 col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Project Location</h3>
                                            <p>{contract_awards_data?.project_location}</p>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            {/* <div
                                className="col-lg-3 col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>Project Location</h3>
                                    <p>{contract_awards_data?.project_location}</p>
                                </div>
                            </div> */}
                            <div
                                className="col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>Contractor Details</h3>
                                    <p>
                                        {contract_awards_data?.contractor_details}
                                    </p>
                                </div>
                            </div>
                            {
                                contract_awards_data?.tender_notice_no
                                    ?
                                    <div
                                        className="col-lg-3 col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Tender Notice No</h3>
                                            <p>{contract_awards_data?.tender_notice_no}</p>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            {
                                contract_awards_data?.description
                                    ?
                                    <div
                                        className="col-lg-3 col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Description</h3>
                                            <p>{contract_awards_data?.description}</p>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div
                    data-bs-toggle="collapse"
                    href="#otherInformation"
                    // className="collapsed question"
                    className={` collapsed question ${contract_awards_data?.org_name ? '' : 'cursor-not-allowed'}`}
                >
                    Other Information
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                    {
                        contract_awards_data?.org_name
                            ?
                           ''
                            :
                            <i className='bi bi-lock-fill locIcons'></i>
                    }
                </div>
                <div
                    id="otherInformation"
                    className="collapse"
                    data-bs-parent=".faq-list"
                >
                    <div className="pricing pdlr10">
                        <div className="row">
                            <div
                                className="col-lg-3 col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>CPV</h3>
                                    <p>{contract_awards_data?.cpv_codes}</p>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>Sector </h3>
                                    <p>{contract_awards_data?.sectors}</p>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>Award Publish Date</h3>
                                    <p>{handleDateDefault(contract_awards_data?.awards_publish_date)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}