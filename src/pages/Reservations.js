import React from "react";
import "./Reservations.css";
import { useState } from "react";
import BookingForm from "../components/BookingForm";

const Reservations = () => {
  //Current date function
  function getCurrentDate(separator = "-") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  }

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
    date: getCurrentDate() ?? "",
    time: "19:00",
    occasion: "anniversary",
    seating: "indoor",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return <BookingForm value={values} onChange={handleChange} />;
};

export default Reservations;
