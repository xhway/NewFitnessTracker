import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import NewHeader from "../components/NewHeader";
import Footer from "../components/Footer";

import Auth from "../utils/auth";
import ErrorAlert from "../components/ErrorAlert";

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
    <main className="flex flex-col">
      <NewHeader />

      {error && <ErrorAlert error={error} />}

      <div className="bg-gray-900 w-2/3 lg:w-1/3 mx-auto mt-10">
        <form
          data-wf-user-form-type="login"
          data-wf-user-form-redirect="/"
          onSubmit={handleFormSubmit}
          className="flex flex-col px-5 py-4 text-white"
        >
          <div className="mx-auto text-white uppercase mt-3">
            <h2>Log in</h2>
          </div>
          <label htmlFor="Email" className="uppercase mb-2 text-lg">
            Email
          </label>
          <input
            type="email"
            maxLength="256"
            placeholder=""
            name="email"
            id="wf-log-in-email"
            className="p-2 mb-4 text-black"
            autoComplete="email"
            required=""
            data-wf-user-form-input-type="email"
            value={formState.email}
            onChange={handleChange}
          />
          <label htmlFor="Password" className="uppercase mb-2 text-lg">
            Password
          </label>
          <input
            type="password"
            maxLength="256"
            placeholder=""
            name="password"
            id="wf-log-in-password"
            className="p-2 mb-4 text-black"
            required=""
            data-wf-user-form-input-type="password"
            value={formState.password}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="Log In"
            data-wait="Please wait..."
            className="text-black bg-white cursor-pointer my-4 py-3 px-4 w-1/3 mx-auto font-bold uppercase"
          />
          <div className="text-center">
            <span className="text-span-2">Don&#x27;t have an account?</span>
            <Link to="/signup" className="mx-2 uppercase font-bold text-white">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default Login;
