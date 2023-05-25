import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import NewHeader from "../components/NewHeader";
import Footer from "../components/Footer";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";
import ErrorAlert from "../components/ErrorAlert";

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
    <main className="flex flex-col">
      <NewHeader />

      {error && <ErrorAlert error={error} />}

      <div className="bg-gray-900 w-2/3 lg:w-1/3 mx-auto mt-10">
        <form
          onSubmit={handleFormSubmit}
          data-wf-user-form-type="signup"
          className="flex flex-col px-5 py-4 text-white"
        >
          <div className="mx-auto text-white uppercase mt-3">
            <h2 className="heading">Sign up</h2>
          </div>
          <label htmlFor="username" className="uppercase mb-2 text-lg">
            Name
          </label>
          <input
            type="text"
            className="p-2 mb-4 text-black"
            maxLength="256"
            name="username"
            autoComplete="none"
            data-name=""
            placeholder=""
            required=""
            value={formState.username}
            onChange={handleChange}
          />
          <label htmlFor="Email" className="uppercase mb-2 text-lg">
            Email
          </label>
          <input
            type="email"
            maxLength="256"
            placeholder=""
            name="email"
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
            data-name=""
            maxLength="256"
            placeholder=""
            name="password"
            className="p-2 mb-4 text-black"
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
              placeholder=""
              required=""
            />
            <span className="checkbox-label-2 w-form-label">
              By creating an account, I agree to this website&#x27;s{" "}
              <a href="#" className="text-white mx-1">
                privacy policy
              </a>
              and
              <a href="#" className="text-white">
                terms of service
              </a>
            </span>
          </label>
          <label className="w-checkbox">
            <input
              type="checkbox"
              required=""
              name=""
              data-name=""
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
            className="text-black bg-white cursor-pointer my-4 py-3 px-4 w-1/3 mx-auto font-bold uppercase"
          />
          <div className="text-center">
            <span className="text-span">Already have an account?</span>

            <Link to="/login" className="mx-2 uppercase font-bold text-white">
              Log In
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default Signup;
