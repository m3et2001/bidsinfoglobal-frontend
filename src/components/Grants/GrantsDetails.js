import { format, parseISO } from "date-fns";
import { handleDateDefault } from "../../helpers/utils";

export default function GrantsDetails(props) {
    const { grants_data } = props;

    return (
        <ul className="faq-list">
            <li>
                <div
                    href="#TenderDetails"
                    className={`question ${grants_data?.donor ? '' : 'cursor-not-allowed'}`}
                >
                    Donor Name & Contact
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                    {
                        grants_data?.donor
                            ?
                           ''
                            :
                            <i className='bi bi-lock-fill locIcons'></i>
                    }
                   
                </div>
                <div
                    id="TenderDetails"
                    className={`collapse ${grants_data?.donor ? 'show' : ''}`}
                    data-bs-parent=".faq-list"
                >
                    {
                        grants_data?.donor
                            ?
                            <div className="pricing pdlr10">
                                <div className="row">
                                    <div
                                        className="col-lg-3 col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Donor</h3>
                                            <p>{grants_data?.donor}</p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Contact Information</h3>
                                            <p>{grants_data.contact_information}</p>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-3 col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Location</h3>
                                            <p>{grants_data?.location}</p>
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
                    Grants Details
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
                </div>
                <div
                    id="authortyContactDetails"
                    className={`collapse ${grants_data?.donor ? '' : 'show'}`}
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
                                    <p>{grants_data?.big_ref_no}</p>
                                </div>
                            </div>
                            <div
                                className="col-lg-3 col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>Title </h3>
                                    <p>{grants_data?.title}</p>
                                </div>
                            </div>
                            {
                                grants_data?.type
                                    ?
                                    <div
                                        className="col-lg-3 col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Type </h3>
                                            <p>{grants_data?.type}</p>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            {
                                grants_data?.status
                                    ?
                                    <div
                                        className="col-lg-3 col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Status </h3>
                                            <p>{grants_data?.status}</p>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            {
                                grants_data?.value
                                    ?
                                    <div
                                        className="col-lg-3 col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Value </h3>
                                            <p>{grants_data?.value}</p>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            {
                                grants_data?.type_of_services
                                    ?
                                    <div
                                        className="col-lg-3 col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Type Of Services </h3>
                                            <p>{grants_data?.type_of_services}</p>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            <div
                                className="col-lg-3 col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>Sector </h3>
                                    <p>{grants_data?.sectors}</p>
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
                    className="collapsed question"
                >
                    Other Information
                    <i className="bi bi-chevron-down icon-show"></i>
                    <i className="bi bi-chevron-up icon-close"></i>
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
                                    <h3>Deadline</h3>
                                    <p>{grants_data?.deadline}</p>
                                </div>
                            </div>
                            {
                                grants_data?.duration
                                    ?
                                    <div
                                        className="col-lg-3 col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Duration </h3>
                                            <p>{grants_data?.duration}</p>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            {
                                grants_data?.attachment
                                    ?
                                    <div
                                        className="col-lg-3 col-md-6 mgbtmxy"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="box">
                                            <h3>Attachment </h3>
                                            <p>{grants_data?.attachment}</p>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            <div
                                className="col-lg-3 col-md-6 mgbtmxy"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="box">
                                    <h3>Post Date</h3>
                                    <p>{handleDateDefault(grants_data?.post_date)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}