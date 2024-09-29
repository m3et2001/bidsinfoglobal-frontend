import { InputText } from "primereact/inputtext";
import FundingAgencySelect from "../common/FundingAgencySelect";
import { Dropdown } from "primereact/dropdown";
import { competitionType, noticeTypeConst, tenderTypeConst } from "../../helpers/constants";

export default function TabPanelThree({ getFundingAgencyData, formik }) {
    return (
        <div className="d-flex flex-wrap signupflex">
            <div className="form-group mb-40 wid-30">
                <label>MFA (Funding Agencies) </label>
                <div className="card flex justify-content-center b-0 p-0">
                    <FundingAgencySelect
                        getFundingAgencyData={getFundingAgencyData}
                        name="funding_agency"
                        id="funding_agency"
                        multiple={true}
                        onChange={formik.handleChange("funding_agency")}
                        value={formik?.values?.funding_agency || []}
                        placeholder={`Type here`}
                    />
                </div>
            </div>
            <div className="form-group mb-40 wid-30">
                <label>Contract Value </label>
                <InputText
                    name="contract_value"
                    id="contract_value"
                    value={formik?.values?.contract_value}
                    onChange={formik.handleChange("contract_value")}
                />
            </div>
            <div className="form-group mb-40 wid-30">
                <label>Tender No: </label>
                <InputText
                    name="tender_no"
                    id="tender_no"
                    value={formik?.values?.tender_no}
                    onChange={formik.handleChange("tender_no")}
                />
            </div>
            <div className="form-group mb-40 wid-30">
                <label>BIG Ref No: </label>
                <InputText
                    name="big_ref_no"
                    id="big_ref_no"
                    value={formik?.values?.big_ref_no}
                    onChange={formik.handleChange("big_ref_no")}
                />
            </div>
            <div className="form-group mb-40 wid-30">
                <label>Competition Type </label>
                <Dropdown
                    value={formik?.values?.competition_type}
                    onChange={formik.handleChange("competition_type")}
                    options={competitionType}
                    placeholder="Select Competition Type"
                />
            </div>

            <div className="form-group mb-40 wid-30">
                <label>Notice type</label>
                <Dropdown
                    value={formik?.values?.notice_type}
                    onChange={formik.handleChange("notice_type")}
                    options={noticeTypeConst}
                    placeholder="Select Notice type"
                />
            </div>
            <div className="form-group mb-40 wid-30">
                <label>Tender Type</label>
                <Dropdown
                    value={formik?.values?.tender_type}
                    onChange={formik.handleChange("tender_type")}
                    options={tenderTypeConst}
                    placeholder="Select Tender type"
                />
            </div>
        </div>
    )
}