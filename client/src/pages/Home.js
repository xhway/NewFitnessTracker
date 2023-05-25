import React, { useEffect } from "react";
import Auth from "../utils/auth";
import NewHeader from "../components/NewHeader";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

import g from "./../js/webflow.js";

export default function Home() {
  const loggedIn = Auth.loggedIn();

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=646be386d6f97a2260d9b41b";
    script.crossOrigin = "anonymous";
    script.integrity = "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=";

    document.body.appendChild(script);

    g(".text", 150, "easeOut");
    g(".text---outline", 150, "easeOut");
  }, []);

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
      <Footer />
    </div>
  );
}
