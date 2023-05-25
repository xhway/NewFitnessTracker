import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { getMe } from "../utils/API";
import Auth from "../utils/auth";
//import { formatDate } from '../utils/dateFormat';
import Header from "../components/Header";

import NewHeader from "../components/NewHeader";
import Footer from "../components/Footer";

//import cardioIcon from "../assets/images/cardio.png"
//import resistanceIcon from "../assets/images/resistance.png"

export default function History() {
  const [userData, setUserData] = useState({});
  const [exerciseData, setExerciseData] = useState([]);
  const [displayedItems, setDisplayedItems] = useState(6);

  const loggedIn = Auth.loggedIn();
  let currentDate;

  // everytime loggedIn/userdata changes, the getuserdata runs
  useEffect(() => {
    const getUserData = async () => {
      try {
        //get token
        const token = loggedIn ? Auth.getToken() : null;
        if (!token) return false;

        const response = await getMe(token);

        if (!response.ok) {
          throw new Error("something went wrong!");
        }

        const user = await response.json();

        // combine cardio and resistance data together
        if (user.cardio && user.resistance) {
          const cardio = user.cardio;
          const resistance = user.resistance;
          const exercise = cardio.concat(resistance);

          //sort exercise data by date
          exercise.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          });

          //format date in exercise data
          //   exercise.forEach(item => {
          //     item.date = formatDate(item.date)
          //   });

          setUserData(user);
          setExerciseData(exercise);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getUserData();
  }, [loggedIn, userData]);

  function showMoreItems() {
    setDisplayedItems(displayedItems + 6);
  }

  // If the user is not logged in, redirect to the login page
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="history">
      <NewHeader />
      <div className="flex flex-col items-center my-16">
        <h2 className="uppercase mb-5 font-bold">History</h2>
        {exerciseData.length ? (
          <div className="history-data">
            {/* map the exercise data  */}
            {exerciseData.slice(0, displayedItems).map((exercise) => {
              let dateToDisplay;
              if (exercise.date !== currentDate) {
                currentDate = exercise.date;
                dateToDisplay = exercise.date;
              }
              return (
                <div className="history-div d-flex" key={exercise._id}>
                  <div className="date d-flex justify-center">
                    {dateToDisplay}
                  </div>
                  <Link
                    className="text-decoration-none"
                    to={`/history/${exercise.type}/${exercise._id}`}
                  >
                    {exercise.type === "cardio" ? (
                      <div className="history-card cardio-title d-flex">
                        {/* <div className='d-flex justify-center'><img alt="cardio" src={cardioIcon} className="history-icon" /></div> */}
                        <div>
                          <p className="history-name">{exercise.name}</p>
                          <p className="history-index">
                            {exercise.distance} miles{" "}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="history-card resistance-title d-flex">
                        {/* <div className='d-flex justify-center'><img alt="resistance" src={resistanceIcon} className="history-icon" /></div> */}
                        <div>
                          <p className="history-name">{exercise.name}</p>
                          <p className="history-index">
                            {exercise.weight} pounds{" "}
                          </p>
                        </div>
                      </div>
                    )}
                  </Link>
                </div>
              );
            })}
            {/* show more items  */}
            {exerciseData.length > displayedItems ? (
              <div className="d-flex justify-content-center">
                <button className="show-btn" onClick={showMoreItems}>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg> */}
                  Show More
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="flex flex-col">
            <h3 className="mb-5">No exercise data yet...</h3>
            <Link
              to="/exercise"
              className="mx-auto bg-black text-white py-2 px-3 no-underline uppercase"
            >
              Add Exercise
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
