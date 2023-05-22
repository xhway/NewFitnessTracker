import React, {useState } from 'react'
import { Navigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Auth from "../utils/auth";
//import { createResistance } from '../utils/API';
import Header from "./Header";
//import resistanceIcon from "../assets/images/..."

export default function Resistance(){
    const [resistanceForm, setResistanceForm] = useState({
        name:"",
        weight:"",
        sets:"",
        reps:"",
        date:""
    })
    const [startDate, setStartDate] = useState(new Date());
    const [message, setMessage] = useState("");
    const loggedIn = Auth.loggedIn();

    const handleDateChange = date =>{
        setStartDate(date);
        // handleResistanceChange({
        //     target: {name: "date", value:date}

        // })
    }
    // consthandleResistanceChange =(event) =>{
    //     const {name, value} = event.target;
    //     setResistanceForm({...resistanceForm, [name]: value})
    // }

    const validateForm = (form) =>{
        return form.name && form.weight && form.sets && form.reps && form.date;
    }
    const handleResistanceSubmit = async (event) =>{
        event.preventDefault();
        //get token
        const token = loggedIn ? Auth.getToken(): null;
        if(!token) return false;

        //gets the user's id
        const userId = Auth.getUserId();

        //submit resistance form
        if(validateForm(resistanceForm)){
            try{
                resistanceForm.userId = userId;

                // const response = await createResistance(resistanceForm, token);

                // if (!response.ok){
                //     throw new Error('Something went wrong, Try Again');

                // }
                setMessage("Resistance created successfully")
                setTimeout(()=>{
                    setMessage("")
                },3000);
            }catch (err){
                console.log(err)
            }
        }
        //clears form input after previous save
        setResistanceForm({
            name: "",
            weight:"",
            sets:"",
            reps:"",
            date:""
        });
    }
    if (!loggedIn) {
        return <Navigate to="/login" />;
    }

    return (
        <div className='resistance'>
            <Header />
            <div className="d-flex flex-column align-items-center">
                <h2 className='title text-center'>Add Exercise</h2>
                {/* <form className='resistance-form d-flex flex-column' onSubmit={handleResistanceSubmit}>
                    
                    <input type="text" name="name" id="name" placeholder="Bench Press"
                        value={resistanceForm.name} onChange={handleResistanceChange} />
                    <label>Weight (lbs):</label>
                    <input type="number" name="weight" id="weight" placeholder="0"
                        value={resistanceForm.weight} onChange={handleResistanceChange} />
                    <label>Sets:</label>
                    <input type="number" name="sets" id="sets" placeholder="0"
                        value={resistanceForm.sets} onChange={handleResistanceChange} />
                    <label>Reps:</label>
                    <input type="number" name="reps" id="reps" placeholder="0"
                        value={resistanceForm.reps} onChange={handleResistanceChange} />
                    <label >Date:</label>
                    <DatePicker selected={startDate} value={resistanceForm.date} onChange={handleDateChange} placeholderText="mm/dd/yyyy" />
                    <button className='submit-btn' type="submit" disabled={!validateForm(resistanceForm)} >Add</button>
                </form> */}
                <p className='message'>{message}</p>
            </div>
        </div>
    )
}
