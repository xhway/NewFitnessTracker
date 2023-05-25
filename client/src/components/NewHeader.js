import React from "react";
import { Link, useLocation } from "react-router-dom";
import Auth from "../utils/auth";

export default function Header() {
  const loggedIn = Auth.loggedIn();
  const location = useLocation();

  return (
    <div className="flex flex-wrap w-full shadow-md">
      <nav
        role="navigation"
        className="flex flex-wrap w-full justify-center font-semibold text-black"
      >
        <Link className="my-auto" to="/">
          <img
            src="images/My-project-1-7.png"
            loading="lazy"
            alt=""
            className="h-28 w-auto"
          />
        </Link>
        <ul className="flex flex-wrap my-auto space-x-5 uppercase">
          <li>
            <a href="#" className="nav-link">
              FeatureS
            </a>
          </li>
          <li>
            <Link className="nav-link" to="/prices">
              Pricing
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/prices">
              Resources
            </Link>
          </li>
          <li>
            <a href="#" className="text-black no-underline">
              About US
            </a>
          </li>

          {loggedIn ? (
            <>
              <li>
                <Link
                  className="bg-black text-white py-2 px-3 no-underline"
                  to="/exercise"
                >
                  Add Exercise
                </Link>
              </li>
              <li>
                <Link
                  className="bg-black text-white py-2 px-3 no-underline"
                  to="/history"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  className="bg-red-800 text-white py-2 px-3 no-underline"
                  onClick={Auth.logout}
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  className="bg-black text-white py-2 px-3 no-underline"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="bg-black text-white py-2 px-3 no-underline"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
