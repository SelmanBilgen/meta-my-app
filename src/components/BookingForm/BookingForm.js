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
  handleCheckbox,
  handleFocus,
  focused,
  handleFocusCheckbox,
  handleBlur,
  val,
  checked,
}) {
  const [page, setPage] = useState(0);
  const formTitle = ['Find a Table', 'Contact Information', 'Confirmation'];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(page+1);
    console.log("FormData is "
    + JSON.stringify(values));
  };
  const pageHandle = () => {
    if (page === 0) {
      return (
        <FindTable
          values={values}
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
    
    <form onSubmit={handleSubmit}>
    <div className='form'>
      <div className='reservations'>
        <div className='reservations-container'>
          <h1>{formTitle[page]}</h1>
          <div className='form-body'>{pageHandle()}</div>
          <div className='form-footer'>
          <div className='form-footer1'>

           {page === 2 ? (
              <button type='button' className='form-btn' onClick={navigateHome}>
                Done
              </button>
            
          ) : (
            
              <button
                className='form-btn'
                disabled={page === 0}
                onClick={() => setPage((currentPage) => currentPage - 1)}
              >
                Previous
              </button>
              )}
              </div>
            <div className='form-footer2'>
              {page === 0 ? (
              <button
              type='submit'
                className='form-btn'
                onClick={() => {
                  if (page === formTitle.length - 2) {
                    setPage((currentPage) => currentPage + 1);
                  } else {
                    setPage((currentPage) => currentPage + 1);
                  }
                }}
              >
                Next
              </button>
              ):("")}
              {page === 1 ? 
              (<button
              type='submit'
              onSubmit={handleSubmit}
              className='form-btn'
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
                }>Submit</button> ):('')}
              </div>
            </div>
          
        </div>
      </div>
    </div>
    </form>
  );
}

export default BookingForm;
