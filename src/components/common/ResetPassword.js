import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "./Input";
import { Button } from "./Button";
import { axios } from "../../helpers/axios";
import { resetPasswordUserApi } from "../../helpers/constants";

const validateAdd = yup.object().shape({
    password: yup.string().required("Username Required"),
    confirmpassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});

export default function ResetPassword({ token }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState(false);

    const submit = async (data) => {
        try {
            let payload = {
                password: data.password,
                token
            }
            setError(false);
            setLoading(true);
            const login_response = await axios.post(resetPasswordUserApi, payload);
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
            password: "",
            confirmpassword: "",
        },
        onSubmit: (values) => {
            submit(values);
        },
        validationSchema: validateAdd,
    });

    return (
        <div
            className={`mainBoxLogin commonBoxShadow`}
        >
            <div className="section-title-p text-center loginBox">
                <p className="wid100">
                    Make sure both password are same.
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
                            <label>Password</label>
                            <Input
                                className='form-control'
                                id='password'
                                type='password'
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
                        <div className="form-group mb-40">
                            <label>Confirm Password</label>
                            <Input
                                type='password'
                                className='form-control'
                                id='confirmpassword'
                                name="confirmpassword"
                                placeholder='Your password here...'
                                onChange={formik.handleChange("confirmpassword")}
                                value={formik?.values?.confirmpassword || ""}
                                error={
                                    Boolean(formik.errors.confirmpassword)
                                }
                                helpertext={
                                    formik.errors.confirmpassword
                                }
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <Button value={"Reset Password"} className="commonBtn loginBtn" type={"submit"} loading={loading} />
                    </div>
                </form>
            </div>
        </div>
    )
}