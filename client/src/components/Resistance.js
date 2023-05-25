import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Auth from "../utils/auth";
import { createResistance } from "../utils/API";
import Header from "./Header";
//import resistanceIcon from "../assets/images/..."

import NewHeader from "../components/NewHeader";
import Footer from "../components/Footer";

export default function Resistance() {
  const [resistanceForm, setResistanceForm] = useState({
    name: "",
    weight: "",
    sets: "",
    reps: "",
    date: "",
  });
  const [startDate, setStartDate] = useState(new Date());
  const [message, setMessage] = useState("");
  const loggedIn = Auth.loggedIn();

  const handleDateChange = (date) => {
    setStartDate(date);
    handleResistanceChange({
      target: { name: "date", value: date },
    });
  };
  const handleResistanceChange = (event) => {
    const { name, value } = event.target;
    setResistanceForm({ ...resistanceForm, [name]: value });
  };

  const validateForm = (form) => {
    return form.name && form.weight && form.sets && form.reps && form.date;
  };
  const handleResistanceSubmit = async (event) => {
    event.preventDefault();
    //get token
    const token = loggedIn ? Auth.getToken() : null;
    if (!token) return false;

    //gets the user's id
    const userId = Auth.getUserId();

    //submit resistance form
    if (validateForm(resistanceForm)) {
      try {
        resistanceForm.userId = userId;

        const response = await createResistance(resistanceForm, token);

        if (!response.ok) {
          throw new Error("Something went wrong, Try Again");
        }
        setMessage("Resistance created successfully");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      } catch (err) {
        console.log(err);
      }
    }
    //clears form input after previous save
    setResistanceForm({
      name: "",
      weight: "",
      sets: "",
      reps: "",
      date: "",
    });
  };
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="resistance">
      <NewHeader />
      <div className="d-flex flex-column align-items-center my-16">
        <h2 className="uppercase mb-5 font-bold">Add Exercise</h2>
        <div className="bg-gray-900 w-2/3 lg:w-1/3 mx-auto">
          <form
            className="flex flex-col px-5 py-4 text-white"
            onSubmit={handleResistanceSubmit}
          >
            <label htmlFor="name" className="uppercase mb-2 text-lg">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Bench Press"
              value={resistanceForm.name}
              onChange={handleResistanceChange}
              className="p-2 mb-4 text-black"
            />
            <label htmlFor="weight" className="uppercase mb-2 text-lg">
              Weight (lbs):
            </label>
            <input
              type="number"
              name="weight"
              id="weight"
              placeholder="0"
              value={resistanceForm.weight}
              onChange={handleResistanceChange}
              className="p-2 mb-4 text-black"
            />
            <label htmlFor="sets" className="uppercase mb-2 text-lg">
              Sets:
            </label>
            <input
              type="number"
              name="sets"
              id="sets"
              placeholder="0"
              value={resistanceForm.sets}
              onChange={handleResistanceChange}
              className="p-2 mb-4 text-black"
            />
            <label htmlFor="reps" className="uppercase mb-2 text-lg">
              Reps:
            </label>
            <input
              type="number"
              name="reps"
              id="reps"
              placeholder="0"
              value={resistanceForm.reps}
              onChange={handleResistanceChange}
              className="p-2 mb-4 text-black"
            />
            <label htmlFor="date" className="uppercase mb-2 text-lg">
              Date:
            </label>
            <DatePicker
              selected={startDate}
              value={resistanceForm.date}
              onChange={handleDateChange}
              placeholderText="mm/dd/yyyy"
              className="p-2 mb-4 text-black w-full"
            />
            <button
              className="text-black bg-white cursor-pointer my-4 py-3 px-4 w-1/3 mx-auto font-bold uppercase"
              type="submit"
              disabled={!validateForm(resistanceForm)}
            >
              Add
            </button>
          </form>
        </div>
        <p className="message">{message}</p>
        <Footer />
      </div>
    </div>
  );
}
