import { Link, Navigate, useNavigate } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import { useState } from "react";

export default function TopCategories({ data }) {
    const [isActive, setIsActive] = useState(true);
    const Navigate = useNavigate()
    const handleActionClick = (e, payload, type, url) => {
        e.preventDefault();
        Navigate(url, { state: { [type]: [payload] } });
        
    };
    return (
        <section id="TopTenders" className="services ">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Tenders</h2>
                    <h3>
                        {data?.category_title}
                    </h3>
                    <p className="lg-font">
                        {data?.category_description}
                    </p>
                </div>

                <div className="row">

                    {
                        data?.category_data.map(function (val, ind) {
                            return (
                                <div
                                    className="col-lg-3 col-md-6 col-sm-6 col-6 cat_list_style d-flex align-items-stretch mb-4 mt-2"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    key={ind}

                                >
                                    <div className="icon-box" >
                                        <div className="icon nobg">
                                            <img src={val.icon} alt={val.name} />
                                        </div>
                                        <h4>
                                            <Link to={"/tenders-list"}
                                                onClick={(e) =>
                                                    handleActionClick(
                                                        e,
                                                        val,
                                                        "sectorVal",
                                                        "/tenders-list"
                                                    )
                                                }
                                            >{val.name}</Link>
                                        </h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}