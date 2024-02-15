import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({email: "", password: ""}) 
    // let history = useHistory();
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:3000/api/auth/login`, {
          method: "POST",     
          headers: {
            "Content-Type": "application/json",
            
          },
          body: JSON.stringify({email:credentials.email,password:credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            history.push("/");
            props.showAlert("Logged In Successfully","success")

        }
        else{
            props.showAlert("Invalid credentials","danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
    <>
      <div className="Modal_wrapper__2j0dX">
        <form
          className="common_wrapper__1ZVyt"
          
          // action="https://www.shaadi.com/registration/user/login-submit"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div
            role="presentation"
            data-testid="close_modal"
            className="CloseModal_layerClose__2df4l"
          ></div>
          <div className="form-row">
            <div data-testid="form_header" className="Login_header__3J3uL">
              <img
                data-testid="login_form_shaadi_logo"
                src="https://img2.shaadi.com/assests/2016/images/home-page-layer-logo.png"
                alt="Login to shaadi.com"
                className="Login_shaadiLogo__wLFmO"
              />
              <h2
                data-testid="login_form_heading"
                className="common_formTitle__2V0hm Login_loginFormTitle__3Lovs"
              >
                Welcome back! Please Login
              </h2>
            </div>
            <div className="form-group col-md-12 common_formEleWrap__1tcwK">
              <label htmlFor="email" className="common_layerLable__3VweO">
                Mobile No. / Email ID
              </label>
              <input
                data-testid="login_email"
                className="false form-control common_formTextFreeField__19vUJ"
                type="email"
                placeholder="Enter Mobile no. / Email ID"
               
                value={credentials.email} onChange={onChange} id="email" name="email"
              />
            </div>
            <div
              className="form-group col-md-12 common_formEleWrap__1tcwK"
              data-testid="password_field"
            >
              <label htmlFor="password" className="common_layerLable__3VweO">Password</label>
              <input
                data-testid="login_password"
                className="false form-control common_formTextFreeField__19vUJ"
                type="password"
                placeholder="Enter password"
                name="password"
               
                  value={credentials.password} onChange={onChange} id="password"
              />
            </div>
            <div
              data-testid="autologin"
              className="form-group col-md-12 common_formEleWrap__1tcwK"
            >
              <div
                className="form-check form-check-inline"
                style={{"width": "100%;"}}
              >
                <input
                  data-testid="stay_signed_in"
                  className="form-check-input"
                  type="checkbox"
                  name="autologin"
                  value=""
                  checked=""
                  style={{"margin-right": "5px;"}}
                />
                <label className="form-check-label StayLoggedIn_staySignInLable__R-MO6">
                  Stay Logged in
                </label>
                <div
                  data-testid="stay_signed_in_tooltip"
                  className="StayLoggedIn_loginHelp__2aMoT common_tooltip__32uQ_"
                >
                  <span className="common_tooltiptext__2i0FZ">
                    {/* We recommend that you do not use this feature if you are
                    signing in from a shared computer. */}
                  </span>
                </div>
                <Link
                  data-testid="forgot_password"
                  to="https://my.shaadi.com/forgot-password/user"
                  className="Login_forgotPwdLink__3xa6Z"
                  style={{"margin-left":"auto;"}}
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <button
              data-testid="sign_in"
              className="btn btn-primary btn-md btn-block LoginButton_signIn__1RhQq"
              type="submit"
            >
              Login
            </button>
            <div className="Login_orSeparator__2UWgX">
              <span className="Login_txtOrSeparator__1DL4d">OR</span>
            </div>
            <button
              data-testid="login_with_otp"
              className="btn btn-primary btn-md btn-block LoginWithOtpButton_loginWithOtp__24QsC"
              type="button"
            >
              Login with OTP
            </button>
            <p className="common_switcher__1ey4G">
              New to Shaadi?
              <Link
                data-testid="sign_up_free"
                to="/signup"
                className="Login_signUpFree__2SyUe"
              >
                Sign Up Free
                <span className="Login_signUpFreeArrow__mTEIl"></span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
