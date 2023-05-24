import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  const navigate = useNavigate();
  const loggedIn = Auth.loggedIn();
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, [loggedIn, navigate]);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="w-users-userformpagewrap">
        <div className="w-users-userloginformwrapper">
          <form
            data-wf-user-form-type="login"
            data-wf-user-form-redirect="/"
            onSubmit={handleFormSubmit}
          >
            <div className="w-users-userformheader">
              <h2>Log in</h2>
            </div>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              maxLength="256"
              placeholder=""
              name="email"
              id="wf-log-in-email"
              className="w-input"
              autoComplete="username"
              required=""
              data-wf-user-form-input-type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              maxLength="256"
              placeholder=""
              name="password"
              id="wf-log-in-password"
              className="w-input"
              required=""
              data-wf-user-form-input-type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <input
              type="submit"
              value="Log In"
              data-wait="Please wait..."
              className="w-users-userformbutton w-button"
            />
            <div className="w-users-userformfooter">
              <span className="text-span-2">Don&#x27;t have an account?</span>
              <Link to="/signup" className="link-block-3 w-inline-block">
                Sign Up
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
                wf-login-form-general-error-error="We&#x27;re having trouble logging you in. Please try again, or contact us if you continue to have problems."
                wf-login-form-invalid-email_or_password-error="Invalid email or password. Please try again."
              >
                {error.message}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Login;
