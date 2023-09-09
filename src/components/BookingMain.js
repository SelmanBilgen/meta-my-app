import React from "react";
import "./Booking.css";
import { useState } from "react";
import BookingForm from "./BookingForm";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "./fakeAPI";
import { useNavigate } from "react-router-dom";
import pages from "../pages/pages";

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI();
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = () => [...fetchAPI()];

const BookingMain = () => {
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();

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

  //Current time function
  // function getCurrentTime(separator = ":") {
  //   let newDate = new Date();
  //   let hours = newDate.getHours();
  //   let minutes = newDate.getMinutes();
  //   return `${hours}${separator}${minutes < 10 ? `0${minutes}` : `${minutes}`}`;
  // }

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
    dispatchOnDateChange({ [e.target.name]: e.target.value });
  };
  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate(pages.get("confirmedBooking").path);
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
      dispatchOnDateChange={dispatchOnDateChange}
      submitData={submitData}
      myDate={myDate}
      handleDateChange={handleDateChange}
      handleSubmit={handleSubmit}
      handleCheckbox={handleCheckbox}
    />
  );
};

export default BookingMain;
