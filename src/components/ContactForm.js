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
    subject: yup.string().required("Required"),
    message: yup.string().required("Required"),
});

export default function ContactForm({ loading, submit, response }) {

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        onSubmit: (values) => {
            submit(values);
            formik.resetForm();
        },
        validationSchema: validateAdd,
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            className='php-email-form'
        >
            {
                response ?
                    <div className="alert alert-success">
                        Your request submitted successfully
                    </div>
                    :
                    null
            }
            <div className='row'>
                <div className='col form-group'>
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
                <div className='col form-group'>
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
            </div>
            <div className='form-group'>
                <Input
                    type='text'
                    className='form-control'
                    id='subject'
                    name="subject"
                    placeholder='Your subject here...'
                    onChange={formik.handleChange("subject")}
                    value={formik?.values?.subject || ""}
                    error={
                        Boolean(formik.errors.subject)
                    }
                    helpertext={
                        formik.errors.subject
                    }
                />
            </div>
            <div className='form-group'>
                <textarea
                    className='form-control'
                    name='message'
                    id='message'
                    rows='5'
                    placeholder='Message'
                    onChange={formik.handleChange("message")}
                ></textarea>
                {
                    formik.errors.message ?
                        <div className="error-text">{formik.errors.message}</div>
                        :
                        null
                }
            </div>
            <div className='my-3'>
                <div className='error-message'></div>
                <div className='sent-message'>
                    Your message has been sent.
                    Thank you!
                </div>
            </div>
            <div className='text-center'>
                <Button type="submit" value="Send Message" loading={loading} />
            </div>
        </form>
    )
}