import { useFormik } from "formik";
import * as yup from "yup";
import Input from "./Input";
import React, { useState } from "react";
import { Button } from "./Button";
import { axios } from "../../helpers/axios";
import { loginApi } from "../../helpers/constants";
import { authenticate } from "../../helpers/cookies";

const validateAdd = yup.object().shape({
    username: yup.string().required("Username Required"),
    password: yup.string().required("Password Required"),
});

function Login({ login_description, handleShowPassword, hide }) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const submit = async (payload) => {
        try {
            setError(false);
            setLoading(true);
            const login_response = await axios.post(loginApi, payload);
            if (login_response.data?.success) {
                authenticate(login_response.data?.result, () => window.location.reload());
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
            username: "",
            password: "",
        },
        onSubmit: (values) => {
            submit(values);
        },
        validationSchema: validateAdd,
    });

    return (
        <div className={`mainBoxLogin commonBoxShadow ${hide ? "d-none" : ""}`}>
            <div className="section-title-p text-center loginBox">
                <p className="wid100">{login_description}</p>
                {
                    error ?
                        <div className="alert alert-danger">
                            {error}
                        </div>
                        :
                        null
                }
                <form
                    onSubmit={formik.handleSubmit}
                    className="php-email-form"
                >
                    <div className="row">
                        <div className="form-group mb-40">
                            <label>Username</label>
                            <Input
                                type='text'
                                className='form-control'
                                id='username'
                                name="username"
                                placeholder='Your username here...'
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
                        <div className="form-group mb-40">
                            <label>Password</label>
                            <Input
                                type='password'
                                className='form-control'
                                id='password'
                                name="password"
                                placeholder='Your password here...'
                                onChange={formik.handleChange("password")}
                                value={formik?.values?.password || ""}
                                error={
                                    Boolean(formik.errors.password)
                                }
                                helpertext={
                                    formik.errors.password
                                }
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <Button value={"Login"} className="commonBtn loginBtn" type={"submit"} loading={loading} />
                    </div>
                </form>
                <span className="d-block forgotLink" onClick={handleShowPassword}>
                    Forgot Password?{" "}
                </span>
            </div>
        </div>
    )
}

export default Login;