import React from 'react';
import '../Booking.css';

function Confirmation({ values }) {
  const today = new Date(values.date ? values.date : '');
  const correctedDate = new Date(today);
  correctedDate.setDate(today.getDate() + 1);
  return (
    <div className='confirmation'>
      <div className='confirmation-container'>
        <br />
        <p style={{ display:'inline-block' , margin:'0'}}>
          {values.firstName} {values.lastName}
        </p>
        <p style={{ display:'inline' }}>'s reservation has been confirmed.
        </p>
        <p style={{  marginTop:'2rem' , marginBottom:'0'}}>
          A confirmation email has been sent to:
        </p>
        <p style={{display:'inline-block' }}>{values.email}</p>
        <p >Your reservation is on:</p>
        <p >
          {new Date(correctedDate).toDateString()}
          {' - '} {values.time}
        </p>
      </div>
    </div>
  );
}

export default Confirmation;
