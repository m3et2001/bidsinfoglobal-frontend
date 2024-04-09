import ForgetPassword from "./common/ForgetPassword";
import Login from "./common/Login";

export default function LoginPageComponent({ login_title, login_description, forget_password, handleShowPassword, show }) {
    return (
        <div className='col-md-6 bg-grey loginPagePadding'>
            <div className='homeLoginMain'>
                <div className='section-title pb-0'>
                    <h3>{login_title}</h3>
                </div>

                <Login
                    login_description={login_description}
                    handleShowPassword={() => handleShowPassword()}
                    hide={show}
                />

                <ForgetPassword
                    forget_password={forget_password}
                    show={show}
                    handleShowPassword={() => handleShowPassword()}
                />
            </div>
        </div>
    )
}