import React, { useEffect } from "react";
import Auth from "../utils/auth";

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
    <>
      <div className="body">
        <div className="navbar-logo-center wf-section">
          <div
            data-animation="default"
            data-collapse="medium"
            data-duration="400"
            data-easing="ease"
            data-easing2="ease"
            role="banner"
            className="navbar-logo-center-container shadow-three w-nav"
          >
            <div className="container">
              <div className="navbar-wrapper-three">
                <a href="#" className="navbar-brand-three w-nav-brand">
                  <img
                    src="images/My-project-1-7.png"
                    loading="lazy"
                    width="200"
                    alt=""
                    className="image"
                  />
                </a>
                <nav
                  role="navigation"
                  className="nav-menu-wrapper-three w-nav-menu"
                >
                  <div className="nav-menu-three">
                    <ul role="list" className="nav-menu-block w-list-unstyled">
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
                        <div
                          data-hover="false"
                          data-delay="0"
                          className="nav-dropdown w-dropdown"
                        >
                          <div className="nav-dropdown-toggle w-dropdown-toggle">
                            <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                            <div>Resources</div>
                          </div>
                          <nav className="nav-dropdown-list shadow-three mobile-shadow-hide w-dropdown-list">
                            <a
                              href="#"
                              className="nav-dropdown-link w-dropdown-link"
                            >
                              Resource Link 1
                            </a>
                            <a
                              href="#"
                              className="nav-dropdown-link w-dropdown-link"
                            >
                              Resource Link 2
                            </a>
                            <a
                              href="#"
                              className="nav-dropdown-link w-dropdown-link"
                            >
                              Resource Link 3
                            </a>
                          </nav>
                        </div>
                      </li>
                    </ul>
                    <ul role="list" className="nav-menu-block w-list-unstyled">
                      <li>
                        <a href="#" className="nav-link-accent">
                          About US
                        </a>
                      </li>
                      <li className="mobile-margin-top-10">
                        {loggedIn ? (
                          <Link
                            className="button-primary w-button"
                            to="/exercise"
                          >
                            Add Exercise
                          </Link>
                        ) : (
                          <Link
                            className="button-primary w-button"
                            to="/signup"
                          >
                            Get Started
                          </Link>
                        )}
                      </li>
                    </ul>
                  </div>
                </nav>
                <div className="menu-button w-nav-button">
                  <div className="w-icon-nav-menu"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page">
          <div className="text---group">
            <div className="text---wrap x-05">
              <div className="text">ConquerFitness</div>
              <div className="text---outline">is power</div>
            </div>
            <div className="text---wrap x-04">
              <div className="text">ConquerFitness</div>
              <div className="text---outline">is power</div>
            </div>
            <div className="text---wrap x-03">
              <div className="text">ConquerFitness</div>
              <div className="text---outline">is power</div>
            </div>
            <div className="text---wrap x-02">
              <div className="text">ConquerFitness</div>
              <div className="text---outline">is power</div>
            </div>
            <div className="text---wrap x-01">
              <div className="text">ConquerFitness</div>
              <div className="text---outline">is power</div>
            </div>
            <div className="text---wrap x-00">
              <div className="text">Conquerfitness</div>
              <div className="text---outline">is power</div>
            </div>
          </div>
        </div>
        <div className="gallery-slider wf-section">
          <div className="container-2">
            <div className="gallery-wrapper">
              <div
                id="w-node-_4fec1b26-9752-b07b-885d-48e339ebfbbd-60d9b4da"
                className="gallery-block"
              >
                <h3>Conquer your body.</h3>
                <p>
                  Designed exclusively for you.
                  <br />‍<br />
                  What are you waiting for?
                  <br />‍<br />‍
                </p>
              </div>
              <div
                data-delay="4000"
                data-animation="slide"
                className="gallery-slide w-slider"
                data-autoplay="false"
                data-easing="ease"
                data-hide-arrows="true"
                data-disable-swipe="false"
                data-autoplay-limit="0"
                data-nav-spacing="3"
                data-duration="500"
                data-infinite="true"
                id="w-node-_4fec1b26-9752-b07b-885d-48e339ebfbc2-60d9b4da"
              >
                <div className="w-slider-mask">
                  <div className="gallery-slide-wrapper w-slide">
                    <div className="gallery-slide-image">
                      <img
                        id="w-node-_4fec1b26-9752-b07b-885d-48e339ebfbc6-60d9b4da"
                        sizes="(max-width: 991px) 100vw, 2vw"
                        src="images/Screenshot-2023-05-23-at-11.37.48-AM.png"
                        loading="lazy"
                        srcSet="images/Screenshot-2023-05-23-at-11.37.48-AM-p-500.png 500w, images/Screenshot-2023-05-23-at-11.37.48-AM-p-800.png 800w, images/Screenshot-2023-05-23-at-11.37.48-AM.png 918w"
                        alt=""
                        className="gallery-image"
                      />
                      <h3 className="gallery-slide-text">Theres no limit.</h3>
                    </div>
                  </div>
                  <div className="gallery-slide-wrapper w-slide">
                    <div className="gallery-slide-image">
                      <img
                        sizes="(max-width: 991px) 100vw, 2vw"
                        srcSet="images/Screenshot-2023-05-23-at-11.38.03-AM-p-500.png 500w, images/Screenshot-2023-05-23-at-11.38.03-AM-p-800.png 800w, images/Screenshot-2023-05-23-at-11.38.03-AM.png 960w"
                        src="images/Screenshot-2023-05-23-at-11.38.03-AM.png"
                        loading="lazy"
                        alt=""
                        className="gallery-image"
                      />
                      <h3 className="gallery-slide-text">You can do it.</h3>
                    </div>
                  </div>
                  <div className="gallery-slide-wrapper w-slide">
                    <div className="gallery-slide-image">
                      <img
                        id="w-node-_4fec1b26-9752-b07b-885d-48e339ebfbd0-60d9b4da"
                        loading="lazy"
                        src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124af1aa12aadf_placeholder%201.svg"
                        alt=""
                        className="gallery-image"
                      />
                      <h3 className="gallery-slide-text">
                        Amet minim mollit non deserunt
                      </h3>
                    </div>
                  </div>
                  <div className="gallery-slide-wrapper w-slide">
                    <div className="gallery-slide-image">
                      <img
                        id="w-node-_4fec1b26-9752-b07b-885d-48e339ebfbd5-60d9b4da"
                        loading="lazy"
                        src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a2a3312aae1_placeholder%203.svg"
                        alt=""
                        className="gallery-image"
                      />
                      <h3 className="gallery-slide-text">
                        Amet minim mollit non deserunt
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="gallery-slider-left w-slider-arrow-left">
                  <div className="arrow-wrapper">
                    <img
                      src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a0e4912aadb_Chevron%20right-1.svg"
                      loading="lazy"
                      alt=""
                      className="slider-arrow-embed"
                    />
                  </div>
                </div>
                <div className="gallery-slider-right w-slider-arrow-right">
                  <div className="arrow-wrapper">
                    <img
                      src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a7ce212aacc_Chevron%20right.svg"
                      loading="lazy"
                      alt=""
                      className="slider-arrow-embed"
                    />
                  </div>
                </div>
                <div className="gallery-slide-nav w-slider-nav w-round"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-dark wf-section">
          <div className="container-2">
            <div className="footer-wrapper">
              <a href="#" className="footer-brand w-inline-block">
                <img
                  src="images/My-project-1-7.png"
                  loading="lazy"
                  width="200"
                  alt=""
                />
              </a>
              <div className="footer-content">
                <div
                  id="w-node-_22bc7b35-f387-0978-f4fe-e3f9b15dbf83-60d9b4da"
                  className="footer-block"
                >
                  <div className="title-small">Company</div>
                  <Link className="footer-link" to="/prices">
                    Pricing
                  </Link>
                  <a href="sign-up.html" className="footer-link">
                    Get Started
                  </a>
                </div>
                <div
                  id="w-node-_22bc7b35-f387-0978-f4fe-e3f9b15dbf8c-60d9b4da"
                  className="footer-block"
                >
                  <div className="title-small">Resources</div>
                  <a href="#" className="footer-link">
                    Blog post name list goes here
                  </a>
                  <a href="#" className="footer-link">
                    Blog post name list goes here
                  </a>
                  <a href="#" className="footer-link">
                    Blog post name list goes here
                  </a>
                  <a href="#" className="footer-link">
                    See all resources &gt;
                  </a>
                </div>
                <div
                  id="w-node-_22bc7b35-f387-0978-f4fe-e3f9b15dbf97-60d9b4da"
                  className="footer-block"
                >
                  <div className="title-small">About</div>
                  <a href="#" className="footer-link">
                    Terms &amp; Conditions
                  </a>
                  <a href="#" className="footer-link">
                    Privacy policy
                  </a>
                  <div className="footer-social-block">
                    <a href="#" className="footer-social-link w-inline-block">
                      <img
                        src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124ac15112aad5_twitter%20small.svg"
                        loading="lazy"
                        alt=""
                      />
                    </a>
                    <a href="#" className="footer-social-link w-inline-block">
                      <img
                        src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a389912aad8_linkedin%20small.svg"
                        loading="lazy"
                        alt=""
                      />
                    </a>
                    <a href="#" className="footer-social-link w-inline-block">
                      <img
                        src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a51bf12aae9_facebook%20small.svg"
                        loading="lazy"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-copyright-center">
            Copyright © 2021 Company name
          </div>
        </div>
      </div>
    </>
  );
}
