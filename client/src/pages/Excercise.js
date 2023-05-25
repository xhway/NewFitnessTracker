import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";
import NewHeader from "../components/NewHeader";
import Footer from "../components/Footer";

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
      <div className="flex flex-col items-center my-16">
        <h2 className="uppercase mb-5 font-bold">Add Exercise</h2>

        <div className="flex space-x-5">
          <button
            className="bg-black text-white py-2 px-3 no-underline uppercase"
            onClick={() => navigate("/exercise/cardio")}
          >
            Cardio
          </button>

          <button
            className="bg-black text-white py-2 px-3 no-underline uppercase"
            onClick={() => navigate("/exercise/resistance")}
          >
            Resistance
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
