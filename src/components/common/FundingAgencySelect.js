
import { AutoComplete } from "primereact/autocomplete";
import { Fragment, useState } from "react";


export default function FundingAgencySelect({ getFundingAgencyData, name, multiple, onChange, id, value }) {
    const [records, setRecords] = useState([]);

    const fetchFunction = async (event) => {

        setTimeout(async () => {
            let keywords = event.query.toLowerCase();
            let res = await getFundingAgencyData({
                pageNo: "0",
                limit: "50",
                sortBy: "1",
                sortField: "code",
                keywords: keywords
            })
            setRecords(res?.data?.result)

        }, 1000);
    }


    return (
        <AutoComplete
            id={id}
            name={name}
            field={"title"}
            multiple={multiple}
            value={value}
            suggestions={records}
            completeMethod={fetchFunction}
            onChange={onChange}
            className="w-100"
            panelClassName="w-100 form-control"
            placeholder="Type code or keywords..."
        />
    )
}