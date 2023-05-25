import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Auth from "../utils/auth";
import { createCardio } from "../utils/API";
import { useMutation } from "@apollo/client";
import { ADD_CARDIO } from "../utils/mutations";

import NewHeader from "../components/NewHeader";
import Footer from "../components/Footer";

export default function Cardio() {
  console.log(new Date());
  //const [ addCardio, { error } ] = useQuery(ADD_CARDIO);
  const [cardioForm, setCardioForm] = useState({
    name: "",
    distance: "",
    duration: "",
    date: "",
    userId: "",
  });
  const [startDate, setStartDate] = useState(new Date());
  const [message, setMessage] = useState("");
  const loggedIn = Auth.loggedIn();

  const handleCardioChange = (event) => {
    const { name, value } = event.target;
    setCardioForm({ ...cardioForm, [name]: value });
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    handleCardioChange({
      target: { name: "date", value: date },
    });
  };

  const validateForm = (form) => {
    return form.name && form.distance && form.duration && form.date;
  };

  const handleCardioSubmit = async (event) => {
    event.preventDefault();

    //get token
    const token = loggedIn ? Auth.getToken() : null;
    if (!token) return false;

    // get user id
    const userId = Auth.getUserId();
    // try {
    // Execute mutation and pass in defined parameter data as variables
    //     const { data } = await addCardio({
    //       variables: { name: "",
    //       distance: "",
    //       duration: "",
    //       date:""}
    //     });

    //     window.location.reload();
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };
    //cardio submit
    if (validateForm(cardioForm)) {
      try {
        // add userid to cardio form
        cardioForm.userId = userId;

        const response = await createCardio(cardioForm, token);

        if (!response.ok) {
          throw new Error("something went wrong!");
        }

        setMessage("Cardio successfully added!");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      } catch (err) {
        console.error(err);
      }
    }

    // clear form input
    setCardioForm({
      name: "",
      distance: "",
      duration: "",
      date: "",
    });
  };

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="cardio">
      <NewHeader />
      <div className="flex flex-col items-center my-16">
        <h2 className="uppercase mb-5 font-bold">Add Exercise</h2>
        <div className="bg-gray-900 w-2/3 lg:w-1/3 mx-auto">
          <form
            className="flex flex-col px-5 py-4 text-white"
            onSubmit={handleCardioSubmit}
          >
            {/* <div className='d-flex justify-content-center'><img alt="cardio" src={cardioIcon} className="exercise-form-icon" /></div> */}
            <label htmlFor="name" className="uppercase mb-2 text-lg">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Running"
              value={cardioForm.name}
              onChange={handleCardioChange}
              className="p-2 mb-4 text-black"
            />
            <label htmlFor="distance" className="uppercase mb-2 text-lg">
              Distance (miles):
            </label>
            <input
              type="number"
              name="distance"
              id="distance"
              placeholder="0"
              value={cardioForm.distance}
              onChange={handleCardioChange}
              className="p-2 mb-4 text-black"
            />
            <label htmlFor="duration" className="uppercase mb-2 text-lg">
              Duration (minutes):
            </label>
            <input
              type="number"
              name="duration"
              id="duration"
              placeholder="0"
              value={cardioForm.duration}
              onChange={handleCardioChange}
              className="p-2 mb-4 text-black"
            />
            <label htmlFor="date" className="uppercase mb-2 text-lg">
              Date:
            </label>
            <DatePicker
              selected={startDate}
              value={cardioForm.date}
              onChange={handleDateChange}
              placeholderText="mm/dd/yyyy"
              className="p-2 mb-4 text-black w-full"
            />
            <button
              className="text-black bg-white cursor-pointer my-4 py-3 px-4 w-1/3 mx-auto font-bold uppercase"
              type="submit"
              disabled={!validateForm(cardioForm)}
            >
              Add
            </button>
          </form>
        </div>
        <p className="message">{message}</p>
      </div>
      <Footer />
    </div>
  );
}
