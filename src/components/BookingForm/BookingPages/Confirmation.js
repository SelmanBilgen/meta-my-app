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
        <h3>
          {values.firstName} {values.lastName}
        </h3>{' '}
        <h3 style={{ color: '#f4ce14' }}>
          Your reservation has been confirmed.
        </h3>
        <h3 style={{ color: '#f4ce14' }}>
          A confirmation email has been sent to:
        </h3>
        <h3>{values.email}</h3>
        <h3 style={{ color: '#f4ce14' }}>Your reservation is on:</h3>
        <h3>
          {new Date(correctedDate).toDateString()}
          {' - '} {values.time}
        </h3>
      </div>
    </div>
  );
}

export default Confirmation;
