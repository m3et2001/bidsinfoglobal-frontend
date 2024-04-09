import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";

export default function IndianTenders({ row }) {
    return (
        <div className="services TabIconList">
            {
                row && row.map(function (val, ind) {
                    return (
                        <div className="icon-box tabsIcon" key={ind}>
                            <div className="tabListHeader">
                                <h4>{val?.sectors || "-"}</h4>
                            </div>
                            <div className="tablistbody">
                                <h4>
                                    <Link to="/">
                                        {val.authority_name}
                                    </Link>
                                </h4>
                            </div>
                            <div className="tabListFooter">
                                <span>
                                    <strong>Ref No</strong>: {val.big_ref_no}{" "}
                                </span>
                                <span>
                                    <strong>Due Date</strong> : {val.closing_date ? format(new Date(val.closing_date), "dd/MM/yyyy") : ""}
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}