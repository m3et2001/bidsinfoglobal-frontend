import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../common/Input";
import { Button } from "../common/Button";
import { Link } from "react-router-dom";

const validateAdd = yup.object().shape({
    full_name: yup
        .string()
        .max(40, "Too Long!")
        .required("Required"),
    email: yup.string().email().required("Required"),
    phone_no: yup
        .number()
        .min(99999999, "Please enter minimum 8 digits")
        .max(999999999999, "Too Long!")
        .required("Required"),
    organization_name: yup.string().required("Required"),
    address: yup.string().required("Required"),
    city: yup.string(),
    location: yup.string(),
    pincode: yup.string(),
    country: yup.string(),
    telephone_no: yup.string(),
    website_url: yup.string(),
    products_services: yup.string(),
    operation: yup.string(),
});

const ProfileComponent = (props) => {
    const { submit, loading, countryRecord, data, navigate, success } = props;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: data ? data : {
            full_name: "",
            email: "",
            phone_no: "",
            organization_name: "",
            address: "",
            city: "",
            location: "",
            pincode: "",
            country: "",
            telephone_no: "",
            website_url: "",
            products_services: "",
            operation: ""
        },
        onSubmit: (values) => {
            submit(values);
        },
        validationSchema: validateAdd,
    });

    return (
        <form className='php-email-form' onSubmit={formik.handleSubmit}>
            <p className='wid100 textLeft'>
                Personal Details
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
                    <label>Name </label>
                    <Input
                        type='text'
                        className='form-control'
                        id='full_name'
                        name="full_name"
                        placeholder='Your name here...'
                        onChange={formik.handleChange("full_name")}
                        value={formik?.values?.full_name || ""}
                        error={
                            Boolean(formik.errors.full_name)
                        }
                        helpertext={
                            formik.errors.full_name
                        }
                    />
                </div>
                <div className='form-group mb-40 wid-50'>
                    <label>Email ID</label>
                    <Input
                        type='text'
                        className='form-control'
                        id='email'
                        name="email"
                        placeholder='Your email here...'
                        onChange={formik.handleChange("email")}
                        value={formik?.values?.email || ""}
                        error={
                            Boolean(formik.errors.email)
                        }
                        helpertext={
                            formik.errors.email
                        }
                    />
                </div>
                <div className='form-group mb-40 wid-50'>
                    <label>Phone No</label>
                    <Input
                        type='text'
                        className='form-control'
                        id='phone_no'
                        name="phone_no"
                        placeholder='Your phone number here...'
                        onChange={formik.handleChange("phone_no")}
                        value={formik?.values?.phone_no || ""}
                        error={
                            Boolean(formik.errors.phone_no)
                        }
                        helpertext={
                            formik.errors.phone_no
                        }
                    />
                </div>
            </div>
            <p className='wid100 textLeft'>
                Organization Details
            </p>
            <div className='d-flex flex-wrap signupflex'>
                <div className='form-group mb-40 wid-50'>
                    <label>
                        Organization name*
                    </label>
                    <Input
                        type='text'
                        className='form-control'
                        id='organization_name'
                        name="organization_name"
                        placeholder='Your organization here...'
                        onChange={formik.handleChange("organization_name")}
                        value={formik?.values?.organization_name || ""}
                        error={
                            Boolean(formik.errors.organization_name)
                        }
                        helpertext={
                            formik.errors.organization_name
                        }
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
                        Telephone No
                    </label>
                    <Input
                        type='text'
                        className='form-control'
                        id='telephone_no'
                        name="telephone_no"
                        placeholder='Your telephone no here...'
                        onChange={formik.handleChange("telephone_no")}
                        value={formik?.values?.telephone_no || ""}
                        error={
                            Boolean(formik.errors.telephone_no)
                        }
                        helpertext={
                            formik.errors.telephone_no
                        }
                    />
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
                <div className='form-group mb-40 wid-100'>
                    <label>
                        Product & Services
                    </label>
                    <textarea
                        rows='4'
                        className='form-control'
                        name='products_services'
                        id='products_services'
                        onChange={formik.handleChange("products_services")}
                        value={formik?.values?.products_services || ""}
                    >{formik?.values?.products_services || ""}</textarea>
                </div>
                <div className='form-group mb-40 wid-100'>
                    <label>
                        Area of
                        Operation:(City,
                        State, Country from
                        where Business
                        Opportunities and
                        infomation is
                        required)*
                    </label>
                    <textarea
                        rows='4'
                        className='form-control'
                        name='operation'
                        id='operation'
                        onChange={formik.handleChange("operation")}
                        value={formik?.values?.operation || ""}
                    >{formik?.values?.operation || ""}</textarea>
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

export default ProfileComponent;