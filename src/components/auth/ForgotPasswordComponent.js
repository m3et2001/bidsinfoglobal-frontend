import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../common/Input";
import { Button } from "../common/Button";
import { Link } from "react-router-dom";

const validateAdd = yup.object().shape({
    old_password: yup.string().required("Required"),
    new_password: yup.string().required("Required"),
});

const ForgotPasswordComponent = (props) => {
    const { submit, loading, data, success, error } = props;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: data ? data : {
            old_password: "",
            new_password: "",
        },
        onSubmit: (values) => {
            submit(values);
        },
        validationSchema: validateAdd,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <p className='wid100 textLeft'>
                Password Reset
            </p>
            {
                props.success || props.error ?
                    <div className={`alert ${success ? 'alert-success' : 'alert-danger'}`}>
                        {success.message || error}
                    </div>
                    :
                    null
            }
            <div className='d-flex flex-wrap signupflex'>
                <div className='form-group mb-40 wid-50'>
                    <label>Old Password*</label>
                    <Input
                        type='text'
                        className='form-control'
                        id='old_password'
                        name="old_password"
                        placeholder='Your old password here...'
                        onChange={formik.handleChange("old_password")}
                        value={formik?.values?.old_password || ""}
                        error={
                            Boolean(formik.errors.old_password)
                        }
                        helpertext={
                            formik.errors.old_password
                        }
                    />
                </div>
                <div className='form-group mb-40 wid-50'>
                    <label>New Passwod*</label>
                    <Input
                        type='text'
                        className='form-control'
                        id='new_password'
                        name="new_password"
                        placeholder='Your new password here...'
                        onChange={formik.handleChange("new_password")}
                        value={formik?.values?.new_password || ""}
                        error={
                            Boolean(formik.errors.new_password)
                        }
                        helpertext={
                            formik.errors.new_password
                        }
                    />
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

export default ForgotPasswordComponent;