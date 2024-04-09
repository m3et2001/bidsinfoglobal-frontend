import GlobalTenders from "./GlobalTenders";
import IndianTenders from "./IndianTenders";

export default function TopTenders({ data }) {
    return (
        <section id="GlobalTenders" className="services section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Various</h2>
                    <h3>
                        {data?.tender_title}
                    </h3>
                    <p className="lg-font">
                        {data?.tender_description}
                    </p>
                </div>

                <div className="row">
                    <div
                        className="col-lg-12 align-items-stretch mb-4 mt-2"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="tender_tab">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button
                                        className="nav-link active"
                                        id="nav-home-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-home"
                                        aria-selected="true"
                                    >
                                        <i className="bx bx-globe"></i>Global Tenders
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="nav-profile-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-profile"
                                        aria-selected="false"
                                    >
                                        <i className="bx bx-globe"></i>Indian Tenders
                                    </button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="nav-home"
                                    role="tabpanel"
                                    aria-labelledby="nav-home-tab"
                                    tabIndex="0"
                                >
                                    <GlobalTenders row={data?.global_tender_data} />
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-profile"
                                    role="tabpanel"
                                    aria-labelledby="nav-profile-tab"
                                    tabIndex="0"
                                >
                                    <IndianTenders row={data?.indian_tender_data} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}