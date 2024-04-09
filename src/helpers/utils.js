import { format } from "date-fns";

export const convertArrayDateToString = (arr, str) => {

    try {
        if (!arr)
            return str;

        let datesArray = arr.map((dateString) => {
            let newD = new Date(dateString);
            newD = newD.toLocaleString();
            return newD.split(",")[0]
        })

        return datesArray.join("-");
    } catch (error) {
        console.log(error?.message)
    }
}

export const convertDateToRangeDate = (val) => {
    try {
        var date = new Date();
        let startDate = new Date();
        let endDate = new Date();

        if (val === "current_month") {
            startDate = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
            endDate = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0);
        } else if (val === "last_month") {
            startDate = new Date(startDate.getFullYear(), startDate.getMonth() - 1, 1);
            endDate = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
        } else if (val === 1) {
            startDate = new Date(startDate.setDate(startDate.getDate() - val));
            endDate = new Date(endDate.setDate(date.getDate() - val));
        } else {
            startDate = new Date(startDate.setDate(startDate.getDate() - val));
        }
        return [startDate, endDate]
    } catch (error) {
        console.log(error?.message);
    }
}

export const handleDateDefault = (date) => {
    try {
        return format(new Date(date), "dd-MM-yyyy")
    } catch (e) {
        return "Invalid Date";
    }
}

export const NewLineText = ({text, className}) => {
    const newText = text.split('\n').map(str => <p className={className}>{str}</p>);

    return newText;
}