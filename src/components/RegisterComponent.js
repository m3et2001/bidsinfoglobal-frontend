import { useFormik } from "formik";
import * as yup from "yup";
import Input from "./common/Input";
import React, { useState } from "react";
import { Button } from "./common/Button";
import { axios } from "../helpers/axios";
import { registerApi } from "../helpers/constants";

const validateAdd = yup.object().shape({
    username: yup.string().required("Required"),
    full_name: yup.string().required("Required"),
    email: yup.string().email().required("Required"),
    phone_no: yup
        .number()
        .min(99999999, "Please enter minimum 8 digits")
        .max(999999999999, "Too Long!")
        .required("Required"),
    organization_name: yup.string(),
    website_url: yup.string(),
    country: yup.string(),
});

export default function RegisterComponent({ register_description, register_title, countryData }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [messgage, setMessage] = useState(false);

    const submit = async (payload) => {
        try {
            setError(false);
            setLoading(true);
            const login_response = await axios.post(registerApi, payload);
            if (login_response.data?.success) {
                setMessage(login_response.data?.message);
            }
            setLoading(false);
        } catch (error) {
            setError(error?.response?.data?.message || error.message)
            setLoading(false);
        }
    }


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            full_name: "",
            username: "",
            email: "",
            phone_no: "",
            organization_name: "",
            website_url: "",
            country: ""
        },
        onSubmit: (values) => {
            submit(values);
        },
        validationSchema: validateAdd,
    });


    return (
        <div className='col-md-6 signupPagePadding'>
            <div className='homeLoginMain'>
                <div className="section-title pb-0">
                    <h3>{register_title}</h3>
                </div>

                <div className='mainBoxLogin commonBoxShadow'>
                    <div className="section-title-p text-center loginBox">
                        <p className='wid100'>{register_description}</p>
                        {
                            error ?
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                                :
                                null
                        }
                        {
                            messgage ?
                                <div className="alert alert-success">
                                    {messgage}
                                </div>
                                :
                                null
                        }
                        <form onSubmit={formik.handleSubmit} className="php-email-form">
                            <div className="d-flex flex-wrap signupflex">
                                <div className="form-group mb-40 wid-50">
                                    <label>Name </label>
                                    <Input
                                        type='text'
                                        className='form-control'
                                        id='name'
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
                                <div className="form-group mb-40 wid-50">
                                    <label>Username * </label>
                                    <Input
                                        type='text'
                                        className='form-control'
                                        id='username'
                                        name="username"
                                        placeholder='Enter username'
                                        onChange={formik.handleChange("username")}
                                        value={formik?.values?.username || ""}
                                        error={
                                            Boolean(formik.errors.username)
                                        }
                                        helpertext={
                                            formik.errors.username
                                        }
                                    />
                                </div>
                                <div className="form-group mb-40 wid-50">
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
                                <div className="form-group mb-40 wid-50">
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
                                <div className="form-group mb-40 wid-50">
                                    <label>Organization name*</label>
                                    <Input
                                        type='text'
                                        className='form-control'
                                        id='organization_name'
                                        name="organization_name"
                                        placeholder='Your organization name here...'
                                        onChange={formik.handleChange("organization_name")}
                                        value={formik?.values?.organization_name || ""}
                                    />
                                </div>
                                <div className="form-group mb-40 wid-50">
                                    <label>website url</label>
                                    <Input
                                        type='text'
                                        className='form-control'
                                        id='website_url'
                                        name="website_url"
                                        placeholder='Your website url here...'
                                        onChange={formik.handleChange("website_url")}
                                        value={formik?.values?.website_url || ""}
                                    />
                                </div>
                                <div className="form-group mb-40 wid-50">
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
                                            countryData?.result?.length > 0 && countryData?.result.map(function (row, ind) {
                                                return (
                                                    <option value={row.name} key={ind}>{row.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="text-center">
                                <Button value={"Sign Up"} className="commonBtn loginBtn" type={"submit"} loading={loading} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}