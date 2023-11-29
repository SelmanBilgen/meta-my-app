import React from "react";
import "./Booking.css";
import { useState } from "react";
import BookingForm from "./BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "./fakeAPI";

const updateTimes = (availableTimes, action) => {
  const newTimes = fetchAPI();
  switch (action.type) {
    case "new_times":
      return newTimes;
    default:
      return availableTimes;
  }
};
const initializeTimes = () => ["21:00", "21:30", "22:00", "22:30", "23:00"];

const BookingMain = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const myDate = new Date().toISOString().split("T")[0];

  //Form's state
  const [values, setValues] = useState({
    party: "1",
    date: myDate ?? "",
    time: availableTimes[0],
    occasion: "anniversary",
    seating: "indoor",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    request: "",
    policy: true,
  });

  const [val, setVal] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setVal({ ...val, [e.target.name]: e.target.validity.valid });
  };

  const handleCheckbox = (e) => {
    setValues({ ...values, [e.target.name]: e.target.checked });
  };

  const handleDateChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    dispatch({ type: "new_times" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(values));
  };

  return (
    <BookingForm
      values={values}
      value={values}
      handleChange={handleChange}
      availableTimes={availableTimes}
      myDate={myDate}
      handleDateChange={handleDateChange}
      handleSubmit={handleSubmit}
      handleCheckbox={handleCheckbox}
      val={val}
    />
  );
};

export default BookingMain;
