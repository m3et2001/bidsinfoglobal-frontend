
import { AutoComplete } from "primereact/autocomplete";
import { Fragment, useState } from "react";


export default function CountrySelect({ getCountryData, name, multiple, onChange, id, value, className, placeholder = "Type country here" }) {
    const [records, setRecords] = useState([]);

    const fetchFunction = async (event) => {
        setTimeout(async () => {
            let keywords = event.query.toLowerCase();
            let res = await getCountryData({
                pageNo: "0",
                limit: "50",
                sortBy: "1",
                sortField: "code",
                keywords: keywords
            })
            setRecords(res.data?.result || [])
        }, 1000);
    }

    console.log(value, "value");

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
            placeholder={placeholder}
            className={`w-100 ${className}`}
        />
    )
}