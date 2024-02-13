import React, { useState } from 'react';
import './Booking.css';
import FindTable from './BookingPages/FindTable';
import ContactInfo from './BookingPages/ContactInfo';
import Confirmation from './BookingPages/Confirmation';
import { useNavigate } from 'react-router-dom';

function BookingForm({
  values,
  handleChange,
  myDate,
  availableTimes,
  handleDateChange,
  handleSubmit,
  handleCheckbox,
  handleFocus,
  focused,
  fname,
  handleFname,
  handleFocusCheckbox,
  handleBlur,
  val,
  checked,
}) {
  const [page, setPage] = useState(0);
  const formTitle = ['Find a Table', 'Contact Information', 'Confirmation'];
  
  const pageHandle = () => {
    if (page === 0) {
      return (
        <FindTable
          values={values}
          // value={value}
          handleChange={handleChange}
          myDate={myDate}
          availableTimes={availableTimes}
          handleDateChange={handleDateChange}
          handleSubmit={handleSubmit}
        />
      );
    } else if (page === 1) {
      return (
        <ContactInfo
          values={values}
          handleChange={handleChange}
          handleCheckbox={handleCheckbox}
          focused={focused}
          handleFocus={handleFocus}
          handleFocusCheckbox={handleFocusCheckbox}
          fname={fname}
          handleFname={handleFname}
          val={val}
          handleBlur={handleBlur}
        />
      );
    } else if (page === 2) {
      return <Confirmation values={values} />;
    }
  };
  const navigate = useNavigate();
  function navigateHome() {
    return navigate('/');
  }



  return (
    <div className='form'>
      {/* <div className="progress-bar"></div> */}
      <div className='reservations'>
        <div className='reservations-container'>
          <h1>{formTitle[page]}</h1>
          <div className='form-body'>{pageHandle()}</div>
          {page === 2 ? (
            <div className='form-footer-done'>
              <button className='form-btn' onClick={navigateHome}>
                Done
              </button>
            </div>
          ) : (
            <div className='form-footer'>
              <button
                className='form-btn'
                disabled={page === 0}
                onClick={() => setPage((currentPage) => currentPage - 1)}
              >
                Previous
              </button>
              <button
                className='form-btn'
                onClick={() => {
                  if (page === formTitle.length - 2) {
                    setPage((currentPage) => currentPage + 1);
                  } else {
                    setPage((currentPage) => currentPage + 1);
                  }
                }}
                disabled={
                  page === 1 &&
                  (val.firstName === false) |
                    (val.lastName === false) |
                    (val.email === false) |
                    (val.phone === false) |(val.firstName === null) |
                    (val.lastName === null) |
                    (val.email === null) |
                    (val.phone === null) |
                    (checked.policy === false)
                }
              >
                {page === formTitle.length - 2 ? 'Submit' : 'Next'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
