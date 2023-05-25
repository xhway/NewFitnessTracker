import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";
import NewHeader from "../components/NewHeader";
import Footer from "../components/Footer";
//import cardioIcon from "../assets/images/cardio.png"
//import resistanceIcon from "../assets/images/resistance.png"

export default function Exercise() {
  const loggedIn = Auth.loggedIn();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, [loggedIn, navigate]);

  return (
    <div>
      <NewHeader />
      <div className="exercise d-flex flex-column align-items-center">
        <h2 className="title">Add Exercise</h2>
        <div>
          <button
            className="cardio-btn d-flex flex-column  align-items-center justify-content-center"
            onClick={() => navigate("/exercise/cardio")}
          >
            {/* <img alt="cardio" src={cardioIcon} className="exercise-icon" /> */}
            Cardio
          </button>
        </div>
        <div>
          <button
            className="resistance-btn d-flex flex-column  align-items-center justify-content-center"
            onClick={() => navigate("/exercise/resistance")}
          >
            {/* <img alt="resistance" src={resistanceIcon} className="exercise-icon" /> */}
            Resistance
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
