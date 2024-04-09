import { format, parseISO } from "date-fns";
import { Fragment } from "react";
import { handleDateDefault } from "../../helpers/utils";

export default function TenderDetails(props) {
    const { tenders_data } = props;

    return (
        <ul className='faq-list'>
            <li>
                <div
                    data-bs-toggle='collapse'
                    href='#TenderDetails'
                    className={`question ${tenders_data?.authority_name ? '' : 'cursor-not-allowed'}`}
                >
                    Authority Name & Contact
                    <i className='bi bi-chevron-down icon-show'></i>
                    <i className='bi bi-chevron-up icon-close'></i>
                    {
                        tenders_data?.authority_name
                            ?
                           ''
                            :
                            <i className='bi bi-lock-fill locIcons'></i>
                    }
                   
                </div>
                <div
                    id='TenderDetails'
                    className={`collapse ${tenders_data?.authority_name ? 'show' : ''}`}
                    data-bs-parent='.faq-list'
                >
                    {
                        tenders_data?.authority_name
                            ?
                            <div className='pricing pdlr10'>
                                <div className='row'>
                                    <div
                                        className='col-lg-3 col-md-6 mgbtmxy'
                                        data-aos='fade-up'
                                        data-aos-delay='100'
                                    >
                                        <div className='box'>
                                            <h3>Authority Name{" "}</h3>
                                            <p>{tenders_data?.authority_name}</p>
                                        </div>
                                    </div>
                                    <div
                                        className='col-md-6 mgbtmxy'
                                        data-aos='fade-up'
                                        data-aos-delay='100'
                                    >
                                        <div className='box'>
                                            <h3>Address</h3>
                                            <p>{tenders_data?.address}</p>
                                        </div>
                                    </div>
                                    <div
                                        className='col-lg-3 col-md-6 mgbtmxy'
                                        data-aos='fade-up'
                                        data-aos-delay='100'
                                    >
                                        <div className='box'>
                                            <h3>Telephone</h3>
                                            <p>{tenders_data?.telephone}</p>
                                        </div>
                                    </div>
                                    <div
                                        className='col-lg-3 col-md-6 mgbtmxy'
                                        data-aos='fade-up'
                                        data-aos-delay='100'
                                    >
                                        <div className='box'>
                                            <h3>FAX Number</h3>
                                            <p>{tenders_data?.fax_number || "N/A"}</p>
                                        </div>
                                    </div>
                                    <div
                                        className='col-lg-3 col-md-6 mgbtmxy'
                                        data-aos='fade-up'
                                        data-aos-delay='100'
                                    >
                                        <div className='box'>
                                            <h3>Email</h3>
                                            <p>{tenders_data?.email || "N/A"}</p>
                                        </div>
                                    </div>
                                    <div
                                        className='col-lg-3 col-md-6 mgbtmxy'
                                        data-aos='fade-up'
                                        data-aos-delay='100'
                                    >
                                        <div className='box'>
                                            <h3>Contact Person</h3>
                                            <p>{tenders_data?.contact_person}</p>
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
                    data-bs-toggle='collapse'
                    className='collapsed question'
                    href='#authortyContactDetails'
                >
                    Tender Details
                    <i className='bi bi-chevron-down icon-show'></i>
                    <i className='bi bi-chevron-up icon-close'></i>
                </div>
                <div
                    id='authortyContactDetails'
                    className={`collapse ${tenders_data?.authority_name ? '' : 'show'}`}
                    data-bs-parent='.faq-list'
                >
                    <div className='pricing pdlr10'>
                        <div className='row'>
                            

                            <div
                                className='col-md-12 mgbtmxy'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                <div className='box'>
                                    <h3> Description </h3>
                                    <p> {tenders_data?.description} </p>
                                </div>
                            </div>
                           
                            {
                                tenders_data?.authority_name
                                    ?
                                    <Fragment>
                                         <div
                                        className='col-lg-3 col-md-6 mgbtmxy'
                                        data-aos='fade-up'
                                        data-aos-delay='100'
                                    >
                                        <div className='box'>
                                            <h3> BIG Ref No </h3>
                                            <p> {tenders_data?.big_ref_no} </p>
                                        </div>
                                    </div>
                                    
                                        <div
                                            className='col-lg-3 col-md-6 mgbtmxy'
                                            data-aos='fade-up'
                                            data-aos-delay='100'
                                        >
                                            <div className='box'>
                                                <h3>
                                                    Tender Type
                                                </h3>
                                                <p>{tenders_data?.tender_type}</p>
                                            </div>
                                        </div>
                                        <div
                                            className='col-lg-3 col-md-6 mgbtmxy'
                                            data-aos='fade-up'
                                            data-aos-delay='100'
                                        >
                                            <div className='box'>
                                                <h3>
                                                    Tender No
                                                </h3>
                                                <p>{tenders_data?.tender_no}</p>
                                            </div>
                                        </div>
                                        <div
                                            className='col-lg-3 col-md-6 mgbtmxy'
                                            data-aos='fade-up'
                                            data-aos-delay='100'
                                        >
                                            <div className='box'>
                                                <h3>
                                                    Financer
                                                </h3>
                                                <p>{tenders_data?.funding_agency || "N/A"}</p>
                                            </div>
                                        </div>
                                        <div
                                            className='col-lg-3 col-md-6 mgbtmxy'
                                            data-aos='fade-up'
                                            data-aos-delay='100'
                                        >
                                            <div className='box'>
                                                <h3>
                                                    Tender
                                                    Competition
                                                </h3>
                                                <p>
                                                    {tenders_data?.tender_competition || "N/A"}
                                                </p>
                                            </div>
                                        </div>
                                    </Fragment>
                                    :
                                    null
                            }
                            <div
                                className='col-lg-3 col-md-6 mgbtmxy'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                <div className='box'>
                                    <h3>
                                        Published
                                        Date
                                    </h3>
                                    <p>
                                        {tenders_data?.published_date ? handleDateDefault(tenders_data?.published_date) : "N/A"}
                                    </p>
                                </div>
                            </div>
                            <div
                                className='col-lg-3 col-md-6 mgbtmxy'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                <div className='box'>
                                    <h3>
                                        Closing Date
                                    </h3>
                                    <p>
                                        {tenders_data?.closing_date ? handleDateDefault(tenders_data?.closing_date) : "N/A"}
                                    </p>
                                </div>
                            </div>
                            <div
                                className='col-md-3 mgbtmxy'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                <div className='box'>
                                    <h3>Country</h3>
                                    <p>{tenders_data?.country}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div
                    data-bs-toggle='collapse'
                    href='#otherInformation'
                    className='collapsed question'
                >
                    Other Information
                    <i className='bi bi-chevron-down icon-show'></i>
                    <i className='bi bi-chevron-up icon-close'></i>
                </div>
                <div
                    id='otherInformation'
                    className='collapse'
                    data-bs-parent='.faq-list'
                >
                    <div className='pricing pdlr10'>
                        <div className='row'>
                            <div
                                className='col-lg-3 col-md-6 mgbtmxy'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                <div className='box'>
                                    <h3>EMD </h3>
                                    <p>
                                        {tenders_data?.emd}
                                    </p>
                                </div>
                            </div>
                            <div
                                className='col-lg-3 col-md-6 mgbtmxy'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                <div className='box'>
                                    <h3>
                                        Estimated
                                        Cost
                                    </h3>
                                    <p>
                                        {tenders_data?.estimated_cost}
                                    </p>
                                </div>
                            </div>
                            <div
                                className='col-lg-3 col-md-6 mgbtmxy'
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >
                                <div className='box'>
                                    <h3>
                                        Document
                                    </h3>
                                    <p>{tenders_data?.documents}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}