import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const navigate = useNavigate();
  const loggedIn = Auth.loggedIn();
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  useEffect(() => {
    if (loggedIn) {
      navigate("/exercice");
    }
  }, [loggedIn, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      console.log({ data });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4 body-2">
      <div className="w-users-usersignupformwrapper">
        <div
          tabIndex="-1"
          className="w-users-userformsuccessstate w-form-success"
        >
          <div className="w-users-userformheader">
            <img
              src="https://d3e54v103j8qbb.cloudfront.net/img/thumbs-up-72.cbcaec93bc.svg"
              loading="lazy"
              alt=""
            />
            <h2>Account activated</h2>
          </div>
          <p>
            Your account was created successfully. You will be redirected
            shortly.
          </p>
          <div data-wf-user-form-redirect="">
            <a href="index.html" className="w-inline-block">
              If nothing happens, click here.
            </a>
          </div>
        </div>
        <form onSubmit={handleFormSubmit} data-wf-user-form-type="signup">
          <div className="w-users-userformheader">
            <h2 className="heading">Sign up</h2>
          </div>
          <label htmlFor="username" className="field-label-3">
            Name
          </label>
          <input
            type="text"
            className="w-input"
            autoComplete="username"
            maxLength="256"
            name="username"
            data-name=""
            data-wf-user-field="wf-user-field-name"
            placeholder=""
            fieldtype="data-wf-user-field-type"
            id="wf-sign-up-name"
            required=""
            value={formState.username}
            onChange={handleChange}
          />
          <label htmlFor="Email" className="field-label-2">
            Email
          </label>
          <input
            type="email"
            maxLength="256"
            placeholder=""
            name="email"
            id="wf-sign-up-email"
            className="w-input"
            autoComplete="email"
            required=""
            data-wf-user-form-input-type="email"
            value={formState.email}
            onChange={handleChange}
          />

          <label htmlFor="Password" className="field-label-4">
            Password
          </label>
          <input
            type="password"
            data-name=""
            maxLength="256"
            placeholder=""
            name="password"
            id="wf-sign-up-password"
            className="w-input"
            required=""
            data-wf-user-form-input-type="password"
            value={formState.password}
            onChange={handleChange}
          />
          <label className="w-checkbox">
            <input
              type="checkbox"
              className="w-checkbox-input"
              name=""
              data-name=""
              data-wf-user-field="wf-user-field-accept-privacy"
              placeholder=""
              id="wf-sign-up-accept-privacy"
              required=""
            />
            <span className="checkbox-label-2 w-form-label">
              By creating an account, I agree to this website&#x27;s{" "}
              <a href="#" className="w-inline-block">
                privacy policy
              </a>
              and
              <a href="#" className="w-inline-block">
                terms of service
              </a>
            </span>
          </label>
          <label className="w-checkbox">
            <input
              type="checkbox"
              id="wf-sign-up-accept-communications"
              required=""
              name=""
              data-name=""
              data-wf-user-field="wf-user-field-accept-communications"
              className="w-checkbox-input"
            />
            <span className="checkbox-label-3 w-form-label">
              I consent to receive marketing emails.
            </span>
          </label>
          <input
            type="submit"
            value="Sign Up"
            data-wait="Please wait..."
            className="w-users-userformbutton submit-button w-button"
          />
          <div className="w-users-userformfooter">
            <span className="text-span">Already have an account?</span>

            <Link to="/login" className="w-inline-block">
              Log In
            </Link>
          </div>
        </form>
        {error && (
          <div
            data-wf-user-form-error="true"
            className="w-users-userformerrorstate w-form-fail"
          >
            <div
              className="user-form-error-msg"
              wf-signup-form-general-error-error="There was an error signing you up. Please try again, or contact us if you continue to have problems."
              wf-signup-form-not-allowed-error="You&#x27;re not allowed to access this site, please contact the admin for support."
              wf-signup-form-invalid-email-error="Make sure your email exists and is properly formatted (e.g., user@domain.com)."
              wf-signup-form-email-already_exist-error="An account with this email address already exists. Log in or reset your password."
              wf-signup-form-use-invite_email-error="Use the same email address your invitation was sent to."
              wf-signup-form-invalid-password-error="Your password must be at least 8 characters."
              wf-signup-form-not-verified-error="We couldn&#x27;t verify your account. Please try again, or contact us if you continue to have problems."
              wf-signup-form-expired-token-error="This link has expired. A new link has been sent to your email. Please try again, or contact us if you continue to have problems."
              wf-signup-form-validation-failed-error="There was an error in some of the information provided."
            >
              {error.message}
            </div>
          </div>
        )}
        <div
          tabIndex="-1"
          className="w-users-usersignupverificationmessage w-form-verification"
          data-wf-user-form-verification="true"
        >
          <div className="w-users-userformheader">
            <img
              src="https://d3e54v103j8qbb.cloudfront.net/img/email-72.67fa6be437.svg"
              loading="lazy"
              alt=""
            />
            <h2>Verification Required</h2>
          </div>
          <p>
            Account verification required. Please check your email to find your
            unique verification link.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signup;
