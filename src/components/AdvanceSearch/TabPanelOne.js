import { Dropdown } from "primereact/dropdown";
import { searchType } from "../../helpers/constants";
import { InputText } from "primereact/inputtext";

export default function TabPanelOne({ formik }) {
    return (
        <div className="d-flex flex-wrap signupflex">
            <div className="form-group mb-40 wid-30">
                <label>Search Type </label>
                <Dropdown
                    name="search_type"
                    id="search_type"
                    value={formik?.values?.search_type}
                    onChange={formik.handleChange("search_type")}
                    options={searchType}
                    placeholder="Select Search Type"
                    className="w-full md:w-14rem"
                />
            </div>
            <div className="form-group mb-40 wid-30">
                <label>Keywords</label>
                <InputText
                    name="keywords"
                    id="keywords"
                    value={formik?.values?.keywords}
                    onChange={formik.handleChange("keywords")}
                />
            </div>
            <div className="form-group mb-40 wid-30">
                <label>Exclude Word</label>
                <InputText
                    name="exclude_words"
                    id="exclude_words"
                    value={formik?.values?.exclude_words}
                    onChange={formik.handleChange("exclude_words")}
                />
            </div>
        </div>
    )
}