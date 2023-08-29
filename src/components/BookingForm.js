import React from "react";
import "../pages/Reservations.css";

function BookingForm({ value, onChange }) {
  return (
    <div className="reservations">
      <div className="reservations-container">
        <h1>Find a Table</h1>
        <h2>Select date and party</h2>
        <div className="inputs-container1">
          <div className="party-input">
            <label>
              Party
              <input
                name="party"
                id="party"
                type="number"
                value={value.party}
                onChange={onChange}
                className="reservations-party"
              />
            </label>
          </div>
          <div className="date-input">
            <label>
              Date
              <input
                name="date"
                id="date"
                type="date"
                value={value.date}
                onChange={onChange}
                className="reservations-date"
              />
            </label>
          </div>

          <div className="time-input">
            <label>
              Time
              <select
                name="time"
                className="reservations-time"
                value={value.time}
                onChange={onChange}
              >
                Time
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="20:30">8:30 PM</option>
                <option value="21:00">9:00 PM</option>
                <option value="21:30">9:30 PM</option>
                <option value="22:00">10:00 PM</option>
              </select>
            </label>
          </div>
        </div>
        <div className="inputs-container2">
          <label>
            Occasion
            <select
              name="occasion"
              className="select-occasion"
              value={value.occasion}
              onChange={onChange}
            >
              <option value="anniversary">Anniversary</option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>
            Seating
            <select
              name="seating"
              className="select-seating"
              value={value.seating}
              onChange={onChange}
            >
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
