import { Calendar } from "primereact/calendar";
import { OverlayPanel } from "primereact/overlaypanel";
import { useRef, useState } from "react";
import { convertArrayDateToString, convertDateToRangeDate } from "../../helpers/utils";

export default function TabPanelFour({ formik }) {

    const [postingDate, setPostingDate] = useState(null);
    const [postingRangeDate, setPostingRangeDate] = useState(null);

    const [closingDate, setClosingDate] = useState(null);
    const [closingRangeDate, setClosingRangeDate] = useState(null);

    const posting_date = useRef(null);
    const closing_date = useRef(null);

    const handlePostingDate = (val) => {
        try {
            let date = convertDateToRangeDate(val);
            formik?.setFieldValue("posting_date", date);
            setPostingDate(date);
            setPostingRangeDate(null);
        } catch (error) {
            console.log(error?.message);
        }
    }

    const handleClosingDate = (val) => {
        try {
            let date = convertDateToRangeDate(val);
            formik?.setFieldValue("closing_date", date);
            setClosingDate(date);
            setClosingRangeDate(null);
        } catch (error) {
            console.log(error?.message);
        }
    }

    const handlePostingRangeDate = (val) => {
        try {
            setPostingRangeDate(val);
            formik?.setFieldValue("posting_date", val);
            setPostingDate(null);
        } catch (error) {
            console.log(error?.message);
        }
    }

    const handleClosingRangeDate = (val) => {
        try {
            setClosingRangeDate(val);
            formik?.setFieldValue("closing_date", val);
            setClosingDate(null);
        } catch (error) {
            console.log(error?.message);
        }
    }

    return (
        <div className="d-flex flex-wrap signupflex">
            <div className="form-group mb-40 wid-30">
                <label>Posting Date: </label>
                <div className="card flex justify-content-center">
                    <span
                        className="postingText"
                        onClick={(e) => posting_date.current.toggle(e)}
                    >
                        {postingDate ? convertArrayDateToString(postingDate, "Select Posting Date") : convertArrayDateToString(postingRangeDate, "Select Posting Date")}
                    </span>
                    <OverlayPanel ref={posting_date}>
                        <ul>
                            <li onClick={() => handlePostingDate(0)}>Today</li>
                            <li onClick={() => handlePostingDate(1)}>Yesterday</li>
                            <li onClick={() => handlePostingDate(7)}>Last 7 Days</li>
                            <li onClick={() => handlePostingDate(15)}>Last 15 Days</li>
                            <li onClick={() => handlePostingDate(30)}>Last 30 Days</li>
                            <li onClick={() => handlePostingDate("current_month")}>This Month</li>
                            <li onClick={() => handlePostingDate("last_month")}>Last Month</li>
                        </ul>
                        <Calendar
                            name="posting_date"
                            value={postingRangeDate}
                            onChange={(e) => handlePostingRangeDate(e.value)}
                            selectionMode="range"
                            readOnlyInput
                            placeholder="Custom date ange"
                        />
                    </OverlayPanel>
                </div>
            </div>
            <div className="form-group mb-40 wid-30">
                <label>Closing Date: </label>
                <div className="card flex justify-content-center">
                    <span
                        className="postingText"
                        onClick={(e) => closing_date.current.toggle(e)}
                    >
                        {closingDate ? convertArrayDateToString(closingDate, "Select Closing Date") : convertArrayDateToString(closingRangeDate, "Select Closing Date")}
                    </span>
                    <OverlayPanel ref={closing_date}>
                        <ul>
                            <li onClick={() => handleClosingDate(0)}>Today</li>
                            <li onClick={() => handleClosingDate(1)}>Yesterday</li>
                            <li onClick={() => handleClosingDate(7)}>Last 7 Days</li>
                            <li onClick={() => handleClosingDate(15)}>Last 15 Days</li>
                            <li onClick={() => handleClosingDate(30)}>Last 30 Days</li>
                            <li onClick={() => handleClosingDate("current_month")}>This Month</li>
                            <li onClick={() => handleClosingDate("last_month")}>Last Month</li>
                        </ul>
                        <Calendar
                            name="closing_date"
                            value={closingRangeDate}
                            onChange={(e) => handleClosingRangeDate(e.value)}
                            selectionMode="range"
                            readOnlyInput
                            placeholder="Custom date ange"
                        />
                    </OverlayPanel>
                </div>
            </div>
        </div>
    )
}