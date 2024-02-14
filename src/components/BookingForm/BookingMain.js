import React from 'react';
import './Booking.css';
import { useState } from 'react';
import BookingForm from './BookingForm';
import { useReducer } from 'react';
import { fetchAPI } from './API';

const updateTimes = (availableTimes, action) => {
  const newTimes = fetchAPI();
  switch (action.type) {
    case 'new_times':
      return newTimes;
    default:
      return availableTimes;
  }
};
const initializeTimes = () => ['21:00', '21:30', '22:00', '22:30', '23:00'];

const BookingMain = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const myDate = new Date().toISOString().split('T')[0];

  //Form's state
  const [values, setValues] = useState({
    party: '1',
    date: myDate ?? '', //The nullish coalescing ( ?? ) operator is a logical operator that returns
    //its right- hand side operand when its left - hand side operand is null or undefined, and otherwise returns
    //its left - hand side operand.
    time: availableTimes[0],
    occasion: 'anniversary',
    seating: 'indoor',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    request: '',
    policy: true,
  });

  const [val, setVal] = useState({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
  });

  const [checked, setChecked] = useState({
    policy: true,})

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setVal({ ...val, [e.target.name]: e.target.validity.valid })
  };

  const handleCheckbox = (e) => {
    setValues({ ...values, [e.target.name]: e.target.checked });
  };

  const handleDateChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    dispatch({ type: 'new_times' });
  };
const handleBlur = (e) => {
  setFocused({ ...focused, [e.target.name]: ++focused[e.target.name] });
  setVal({ ...val, [e.target.name]: e.target.validity.valid })}

  const [focused, setFocused] = useState({
    firstName: 0,
    lastName: 0,
    email: 0,
    phone: 0,
  });
  const handleFocus = (e) => {
    setFocused({ ...focused, [e.target.name]: ++focused[e.target.name] });
    setVal({ ...val, [e.target.name]: e.target.validity.valid });
  };
  const handleFocusCheckbox = (e) => {
    setChecked({ ...checked, [e.target.name]: e.target.checked });
  };
  
  return (
    <BookingForm
      values={values}
      handleChange={handleChange}
      availableTimes={availableTimes}
      myDate={myDate}
      handleDateChange={handleDateChange}
      handleCheckbox={handleCheckbox}
      val={val}
      focused={focused}
      handleFocus={handleFocus}
      handleFocusCheckbox={handleFocusCheckbox}
      handleBlur={handleBlur}
      checked={checked}
    />
  );
};

export default BookingMain;
