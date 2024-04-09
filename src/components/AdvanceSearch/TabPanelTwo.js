import { Dropdown } from "primereact/dropdown";
import CpvCodeSelect from "../common/CpvCodeSelect";
import SectorSelect from "../common/SectorSelect";
import { geoLocationKeyword } from "../../helpers/constants";
import StateSelect from "../common/StateSelect";
import RegionSelect from "../common/RegionSelect";
import CountrySelect from "../common/CountrySelect";

export default function TabPanelTwo({ getCountryData, getCpvCodesData, getSectorsData, getRegionsData, getStatesData, formik }) {
    return (
        <div className="d-flex flex-wrap signupflex">
            <div className="form-group mb-40 wid-30">
                <label>CPV Codes</label>
                <div className="card flex justify-content-center b-0 p-0">
                    <CpvCodeSelect
                        getCpvCodesData={getCpvCodesData}
                        name="cpv_codes"
                        multiple={true}
                        onChange={formik.handleChange("cpv_codes")}
                        value={formik?.values?.cpv_codes || []}
                        className="w-90 md:w-30rem"
                    />
                </div>
            </div>
            <div className="form-group mb-40 wid-30">
                <label>Sector Search</label>
                <div className="card flex justify-content-center b-0 p-0">
                    <SectorSelect
                        getSectorsData={getSectorsData}
                        name="sectors"
                        multiple={true}
                        onChange={formik.handleChange("sectors")}
                        value={formik?.values?.sectors || []}
                    />
                </div>
            </div>
            <div className="form-group mb-40 wid-30">
                <label>Geographical Location Search</label>
                <Dropdown
                    name="location_type"
                    id="location_type"
                    value={formik?.values?.location_type}
                    onChange={formik.handleChange("location_type")}
                    options={geoLocationKeyword}
                    placeholder="Select a Country / Region / State & City"
                    className="w-full md:w-14rem"
                />
            </div>
            {
                formik?.values?.location_type === "State & City"
                    ?
                    <div className="form-group mb-40 wid-30">
                        <label>&nbsp;&nbsp;</label>
                        <div className="card flex justify-content-center b-0 p-0">
                            <StateSelect
                                getStatesData={getStatesData}
                                name="state"
                                multiple={true}
                                onChange={formik.handleChange("state")}
                                value={formik?.values?.state || []}
                                placeholder={`Type ${formik?.values?.location_type} here`}
                            />
                        </div>
                    </div>
                    :
                    formik?.values?.location_type === "Country"
                        ?
                        <div className="form-group mb-40 wid-30">
                            <label>&nbsp;&nbsp;</label>
                            <div className="card flex justify-content-center b-0 p-0">
                                <CountrySelect
                                    getCountryData={getCountryData}
                                    name="country"
                                    multiple={true}
                                    onChange={formik.handleChange("country")}
                                    value={formik?.values?.country || []}
                                    placeholder={`Type ${formik?.values?.location_type} here`}
                                />
                            </div>
                        </div>
                        :
                        <div className="form-group mb-40 wid-30">
                            <label>&nbsp;&nbsp;</label>
                            <div className="card flex justify-content-center b-0 p-0">
                                <RegionSelect
                                    getRegionsData={getRegionsData}
                                    name="regions"
                                    multiple={true}
                                    onChange={formik.handleChange("regions")}
                                    value={formik?.values?.regions || []}
                                    placeholder={`Type ${formik?.values?.location_type} here`}
                                />
                            </div>
                        </div>

            }

        </div>
    )
}