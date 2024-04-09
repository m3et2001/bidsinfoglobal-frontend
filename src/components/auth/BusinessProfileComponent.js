import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../common/Input";
import { Button } from "../common/Button";
import { Link } from "react-router-dom";

const validateAdd = yup.object().shape({
    company_name: yup.string().required("Required"),
    contacts: yup
        .number()
        .min(99999999, "Please enter minimum 8 digits")
        .max(999999999999, "Too Long!")
        .required("Required"),
    telephone_no: yup.string(),
    official_email: yup.string().email().required("Required"),
    fax: yup.string(),
    address: yup.string().required("Required"),
    city: yup.string().required("Required"),
    location: yup.string().required("Required"),
    pincode: yup.string(),
    country: yup.string(),
    website_url: yup.string(),
    employee_strength: yup.string(),
    industry_type: yup.array(),
    business_area: yup.string(),
    establishment_details: yup.string(),
});

const BusinessProfileComponent = (props) => {
    const { submit, loading, countryRecord, data, navigate, success } = props;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: data ? data : {
            company_name: "",
            contacts: "",
            telephone_no: "",
            official_email: "",
            fax: "",
            address: "",
            city: "",
            location: "",
            pincode: "",
            country: "",
            website_url: "",
            employee_strength: "",
            industry_type: [],
            business_area: "",
            establishment_details: "",
        },
        onSubmit: (values) => {
            submit(values);
        },
        validationSchema: validateAdd,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <p className='wid100 textLeft'>
                Business Details
            </p>
            {
                success ?
                    <div className="alert alert-success">
                        Your profile updated successfully
                    </div>
                    :
                    null
            }
            <div className='d-flex flex-wrap signupflex'>
                <div className='form-group mb-40 wid-50'>
                    <label>Company Name*</label>
                    <Input
                        type='text'
                        className='form-control'
                        id='company_name'
                        name="company_name"
                        placeholder='Your name here...'
                        onChange={formik.handleChange("company_name")}
                        value={formik?.values?.company_name || ""}
                        error={
                            Boolean(formik.errors.company_name)
                        }
                        helpertext={
                            formik.errors.company_name
                        }
                    />
                </div>
                <div className='form-group mb-40 wid-50'>
                    <label>Contacts</label>
                    <Input
                        type='text'
                        className='form-control'
                        id='contacts'
                        name="contacts"
                        placeholder='Your contacts here...'
                        onChange={formik.handleChange("contacts")}
                        value={formik?.values?.contacts || ""}
                        error={
                            Boolean(formik.errors.contacts)
                        }
                        helpertext={
                            formik.errors.contacts
                        }
                    />
                </div>
                <div className='form-group mb-40 wid-50'>
                    <label>Telephone No</label>
                    <Input
                        type='text'
                        className='form-control'
                        id='telephone_no'
                        name="telephone_no"
                        placeholder='Your phone number here...'
                        onChange={formik.handleChange("telephone_no")}
                        value={formik?.values?.telephone_no || ""}
                    />
                </div>
                <div className='form-group mb-40 wid-50'>
                    <label>
                        Official Email*
                    </label>
                    <Input
                        type='text'
                        className='form-control'
                        id='official_email'
                        name="official_email"
                        placeholder='Your organization here...'
                        onChange={formik.handleChange("official_email")}
                        value={formik?.values?.official_email || ""}
                        error={
                            Boolean(formik.errors.official_email)
                        }
                        helpertext={
                            formik.errors.official_email
                        }
                    />
                </div>
                <div className='form-group mb-40 wid-50'>
                    <label>Fax</label>
                    <Input
                        type='text'
                        className='form-control'
                        id='fax'
                        name="fax"
                        placeholder='Your fax here...'
                        onChange={formik.handleChange("fax")}
                        value={formik?.values?.fax || ""}
                    />
                </div>
                <div className='form-group mb-40 wid-50'>
                    <label>Address*</label>
                    <Input
                        type='text'
                        className='form-control'
                        id='address'
                        name="address"
                        placeholder='Your address here...'
                        onChange={formik.handleChange("address")}
                        value={formik?.values?.address || ""}
                        error={
                            Boolean(formik.errors.address)
                        }
                        helpertext={
                            formik.errors.address
                        }
                    />
                </div>
                <div className='form-group mb-40 wid-50'>
                    <label>City*</label>
                    <Input
                        type='text'
                        className='form-control'
                        id='city'
                        name="city"
                        placeholder='Your city here...'
                        onChange={formik.handleChange("city")}
                        value={formik?.values?.city || ""}
                        error={
                            Boolean(formik.errors.city)
                        }
                        helpertext={
                            formik.errors.city
                        }
                    />
                </div>
                <div className='form-group mb-40 wid-50'>
                    <label>Location*</label>
                    <Input
                        type='text'
                        className='form-control'
                        id='location'
                        name="location"
                        placeholder='Your location here...'
                        onChange={formik.handleChange("location")}
                        value={formik?.values?.location || ""}
                        error={
                            Boolean(formik.errors.location)
                        }
                        helpertext={
                            formik.errors.location
                        }
                    />
                </div>
                <div className='form-group mb-40 wid-50'>
                    <label>
                        Pin / Zip Code
                    </label>
                    <Input
                        type='text'
                        className='form-control'
                        id='pincode'
                        name="pincode"
                        placeholder='Your pincode here...'
                        onChange={formik.handleChange("pincode")}
                        value={formik?.values?.pincode || ""}
                        error={
                            Boolean(formik.errors.pincode)
                        }
                        helpertext={
                            formik.errors.pincode
                        }
                    />
                </div>
                <div className='form-group mb-40 wid-50'>
                    <label>Country</label>
                    <select
                        className='form-control customInput customInputIcon'
                        id='country'
                        name="country"
                        onChange={formik.handleChange("country")}
                        value={formik?.values?.country || ""}
                    >
                        <option value='' disabled>Country</option>
                        {
                            countryRecord.length > 0 && countryRecord.map(function (row, ind) {
                                return (
                                    <option value={row.name} key={ind}>{row.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='form-group mb-40 wid-50'>
                    <label>
                        Website url
                    </label>
                    <Input
                        type='text'
                        className='form-control'
                        id='website_url'
                        name="website_url"
                        placeholder='Your website_url here...'
                        onChange={formik.handleChange("website_url")}
                        value={formik?.values?.website_url || ""}
                        error={
                            Boolean(formik.errors.website_url)
                        }
                        helpertext={
                            formik.errors.website_url
                        }
                    />
                </div>
                <div className='form-group mb-40 wid-50'>
                    <label>Strength of the employees </label>
                    <select
                        className='form-control customInput customInputIcon'
                        id='employee_strength'
                        name='employee_strength'
                        onChange={formik.handleChange("employee_strength")}
                        value={formik?.values?.employee_strength || "0"}
                    >
                        <option value='0'> Select Strength of the employees </option>
                        <option value='1-50'> 1-50 </option>
                        <option value='50-100'> 50-100 </option>
                        <option value='100-250'> 100-250 </option>
                        <option value='250 and above'> 250 and above </option>
                    </select>
                </div>
                <div className='form-group mb-40 wid-100'>
                    <label> Industry Type </label>
                    <div className='indTextFlex'>
                        <label>
                            <input type='checkbox' onChange={formik.handleChange('industry_type')} checked={formik?.values?.industry_type.includes("Services")} name='industry_type' className='industype' value='Services' />
                            Services
                        </label>
                        <label>
                            <input type='checkbox' onChange={formik.handleChange('industry_type')} checked={formik?.values?.industry_type.includes("Goods")} name='industry_type' className='industype' value='Goods' />
                            Goods
                        </label>
                        <label>
                            <input type='checkbox' onChange={formik.handleChange('industry_type')} checked={formik?.values?.industry_type.includes("Works")} name='industry_type' className='industype' value='Works' />
                            Works
                        </label>
                    </div>
                </div>
                <div className='form-group mb-40 wid-100'>
                    <label>
                        Business Area
                    </label>
                    <textarea
                        rows='4'
                        className='form-control'
                        name='business_area'
                        id='business_area'
                        onChange={formik.handleChange("business_area")}
                        value={formik?.values?.business_area || ""}
                    >{formik?.values?.business_area || ""}</textarea>
                </div>
                <div className='form-group mb-40 wid-100'>
                    <label>
                        Establishment
                        details
                    </label>
                    <textarea
                        rows='4'
                        className='form-control'
                        name='establishment_details'
                        id='establishment_details'
                        onChange={formik.handleChange("establishment_details")}
                        value={formik?.values?.establishment_details || ""}
                    >{formik?.values?.establishment_details || ""}</textarea>
                </div>
            </div>
            <div className='flex_Btn_div'>
                <div className='text-center'>
                    <Link className='btn commonBtn resetBtn' to={"/"} >
                        Cancel
                    </Link>
                </div>
                <div className='text-center'>
                    <Button className='commonBtn loginBtn' type="submit" value="Submit" loading={loading} />
                </div>
            </div>
        </form>
    )
}

export default BusinessProfileComponent;