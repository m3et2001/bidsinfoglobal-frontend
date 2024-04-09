
import { AutoComplete } from "primereact/autocomplete";
import { Fragment, useState } from "react";


export default function SectorSelect({ getSectorsData, name, multiple, onChange, id, value, className }) {
    const [records, setRecords] = useState([]);

    const fetchFunction = async (event) => {

        setTimeout(async () => {
            let keywords = event.query.toLowerCase();
            let res = await getSectorsData({
                pageNo: "0",
                limit: "50",
                sortBy: "1",
                sortField: "name",
                keywords: keywords
            })
            setRecords(res.data?.result || [])

        }, 1000);
    }


    return (
        <AutoComplete
            id={id}
            name={name}
            field={"name"}
            multiple={multiple}
            value={value}
            suggestions={records}
            completeMethod={fetchFunction}
            onChange={onChange}
            placeholder="Type sector name"
            className={`w-100 ${className}`}
        />
    )
}