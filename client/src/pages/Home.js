import React from "react";
import Auth from "../utils/auth";

import NewHeader from "../components/NewHeader";
import Footer from "../components/Footer";
import Prices from "../components/Prices";

import { Link } from "react-router-dom";

export default function Home() {
  const loggedIn = Auth.loggedIn();

  return (
    <div className="body">
      <NewHeader />
      <section
        style={{
          backgroundImage:
            "url(https://ld-wp73.template-help.com/wordpress/prod_18253/v2/wp-content/uploads/2022/03/fitness_bg1.jpg)",
        }}
        className="bg-no-repeat bg-cover bg-center"
      >
        <div className="container">
          <div className="flex">
            <div className="w-1/2">
              <div className="text-block py-32">
                <h2 className="text-white text-3xl uppercase mb-10">
                  Conquer your body.
                </h2>
                <div className="mb-2">
                  <p>Designed exclusively for you.‍</p>
                </div>
                <div className="mb-5">
                  <p>What are you waiting for?‍</p>
                </div>
                {loggedIn ? (
                  <Link
                    className="bg-black text-white py-2 px-3 no-underline"
                    to="/exercise"
                  >
                    Add Exercise
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="bg-black text-white py-2 px-3 no-underline mr-5"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="bg-black text-white py-2 px-3 no-underline"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Prices />
      <Footer />
    </div>
  );
}
