import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "./Input";
import { Button } from "./Button";
import { axios } from "../../helpers/axios";
import { forgetUserApi } from "../../helpers/constants";

const validateAdd = yup.object().shape({
    username: yup.string().required("Username Required"),
});

export default function ForgetPassword({ forget_password, show, handleShowPassword }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState(false);

    const submit = async (payload) => {
        try {
            setError(false);
            setLoading(true);
            const login_response = await axios.post(forgetUserApi, payload);
            if (login_response.data?.success) {
                setMessage(login_response.data?.message)
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
        },
        onSubmit: (values) => {
            submit(values);
        },
        validationSchema: validateAdd,
    });

    return (
        <div
            className={`mainBoxLogin commonBoxShadow ${show ? "" : "d-none"}`}
        >
            <div className="section-title-p text-center loginBox">
                <p className="wid100">
                    {forget_password}
                </p>
                {
                    error ?
                        <div className="alert alert-danger">
                            {error}
                        </div>
                        :
                        null
                }
                {
                    message ?
                        <div className="alert alert-success">
                            {message}
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
                    </div>
                    <div className="text-center">
                        <Button value={"Reset Password"} className="commonBtn loginBtn" type={"submit"} loading={loading} />
                    </div>
                </form>
                <span className="d-block forgotLink" onClick={handleShowPassword}>
                    Back to login{" "}
                </span>
            </div>
        </div>
    )
}