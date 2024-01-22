import React from 'react';
import '../Booking.css';

function FindTable({
  values,
  handleChange,
  availableTimes,
  handleDateChange,
  handleSubmit,
}) {
  const today = new Date(values.date);
  const correctedDate = new Date(today);
  correctedDate.setDate(today.getDate() + 1);

  return (
    <form onSubmit={handleSubmit}>
      <div className='reservations-container'>
        <div className='inputs-container1'>
          <div className='party-input'>
            <label>
              Party
              <input
                name='party'
                id='party'
                type='number'
                min={1}
                max={12}
                value={values.party}
                onChange={handleChange}
                className='reservations-party'
                required={true}
              />
            </label>
          </div>
          <div className='date-input'>
            <label>
              Date
              <input
                name='date'
                id='date'
                type='date'
                value={values.date}
                onChange={handleDateChange}
                className='reservations-date'
                min={new Date().toJSON().slice(0, 10)}
                required={true}
              />
            </label>
          </div>
          <div className='time-input'>
            <label>
              Time
              <select
                name='time'
                className='reservations-time'
                value={values.time}
                onChange={handleChange}
                required={true}
              >
                Time
                {availableTimes.map((times) => (
                  <option data-testid='time-option' key={times} value={times}>
                    {times}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className='inputs-container2'>
          <label>
            Occasion
            <select
              name='occasion'
              className='select-occasion'
              value={values.occasion}
              onChange={handleChange}
              required={true}
            >
              <option value='anniversary'>Anniversary</option>
              <option value='birthday'>Birthday</option>
              <option value='engagement'>Engagement</option>
              <option value='other'>Other</option>
            </select>
          </label>
          <label>
            Seating
            <select
              name='seating'
              className='select-seating'
              value={values.seating}
              onChange={handleChange}
              required={true}
            >
              <option value='indoor'>Indoor</option>
              <option value='outdoor'>Outdoor</option>
            </select>
          </label>
        </div>
        <h3 style={{ color: '#f4ce14', fontWeight: '600' }}>
          Your Reservation Summary
        </h3>
      </div>
      <div className='ticketTable'>
        <table>
          <tbody>
            <tr>
              <th className='headerTable leftCorner'>Party of</th>
              <td className='dataTable rightCorner'>{values.party}</td>
            </tr>
            <tr>
              <th className='headerTable'>Date</th>
              <td className='dataTable'>
                {new Date(correctedDate).toDateString()}
              </td>
            </tr>
            <tr>
              <th className='headerTable'>Time</th>
              <td className='dataTable'>{values.time}</td>
            </tr>
            <tr>
              <th className='headerTable'>Occasion</th>
              <td className='dataTable'>{values.occasion}</td>
            </tr>
            <tr>
              <th className='headerTable bottomLeft'>Seating</th>
              <td className='dataTable bottomRight'>{values.seating}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
}

export default FindTable;
