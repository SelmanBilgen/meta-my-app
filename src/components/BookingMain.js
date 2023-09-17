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

// console.log(response);
// return response.length !== 0 ? response : availableTimes;

//const initializeTimes = () => [...fetchAPI()];
const initializeTimes = () => ["21:00", "21:30", "22:00", "22:30", "23:00"];

const BookingMain = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  //Current date function
  // function getCurrentDate(separator = "-") {
  //   let newDate = new Date();
  //   let date = newDate.getDate();
  //   let month = newDate.getMonth() + 1;
  //   let year = newDate.getFullYear();
  //   return `${year}${separator}${
  //     month < 10 ? `0${month}` : `${month}`
  //   }${separator}${date}`;
  // }
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
    policy: false,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
    />
  );
};

export default BookingMain;
