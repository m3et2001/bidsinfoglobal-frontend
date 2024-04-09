import { useFormik } from "formik";
import * as yup from "yup";
import Input from "./common/Input";
import { Button } from "./common/Button";
import { useEffect } from "react";

const validateAdd = yup.object().shape({
    name: yup
        .string()
        .max(40, "Too Long!")
        .required("Required"),
    email: yup.string().email().required("Required"),
    phoneno: yup
        .number()
        .min(99999999, "Please enter minimum 8 digits")
        .max(999999999999, "Too Long!")
        .required("Required"),
    organization: yup.string().required("Required"),
    website: yup.string(),
    country: yup.string()
});

export default function DropDemoForm(props) {

    const { onSubmit, loading, countryRecord, response } = props;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: "",
            email: "",
            phoneno: "",
            organization: "",
            website: "",
            country: "",
        },
        onSubmit: (values) => {
            onSubmit(values);
            formik.resetForm();
        },
        validationSchema: validateAdd,
    });

    return (
        <form
            className='php-email-form'
            onSubmit={formik.handleSubmit}
        >
            {
                response ?
                    <div className="alert alert-success">
                        Your request submitted successfully
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
                        id='name'
                        name="name"
                        placeholder='Your name here...'
                        onChange={formik.handleChange("name")}
                        value={formik?.values?.name || ""}
                        error={
                            Boolean(formik.errors.name)
                        }
                        helpertext={
                            formik.errors.name
                        }
                    />
                </div>
                <div className='form-group mb-40 wid-50'>
                    <label>
                        Email ID
                    </label>
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
                    <label>
                        Phone No
                    </label>
                    <Input
                        type='text'
                        className='form-control'
                        id='phoneno'
                        name="phoneno"
                        placeholder='Your phone number here...'
                        onChange={formik.handleChange("phoneno")}
                        value={formik?.values?.phoneno || ""}
                        error={
                            Boolean(formik.errors.phoneno)
                        }
                        helpertext={
                            formik.errors.phoneno
                        }
                    />
                </div>
                <div className='form-group mb-40 wid-50'>
                    <label>
                        Organization
                        name*
                    </label>
                    <Input
                        type='text'
                        className='form-control'
                        id='organization'
                        name="organization"
                        placeholder='Your organization name here...'
                        onChange={formik.handleChange("organization")}
                        value={formik?.values?.organization || ""}
                        error={
                            Boolean(formik.errors.organization)
                        }
                        helpertext={
                            formik.errors.organization
                        }
                    />
                </div>
                <div className='form-group mb-40 wid-50'>
                    <label>
                        Website URL
                    </label>
                    <Input
                        type='text'
                        className='form-control'
                        id='website'
                        name="website"
                        placeholder='Your website name here...'
                        onChange={formik.handleChange("website")}
                        value={formik?.values?.website || ""}
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
            </div>
            <div className='text-center'>
                <Button className='commonBtn loginBtn' type="submit" value="Submit" loading={loading} />
            </div>
        </form>
    )
}