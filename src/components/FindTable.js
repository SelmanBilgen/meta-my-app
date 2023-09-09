import React from "react";
import "./Booking.css";

function ContactInfo({
  values,
  value,
  handleChange,
  myDate,
  availableTimes,
  handleDateChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="reservations-container">
        <div className="inputs-container1">
          <div className="party-input">
            <label>
              Party
              <input
                name="party"
                id="party"
                type="number"
                min={1}
                max={12}
                value={value.party}
                onChange={handleChange}
                className="reservations-party"
                required={true}
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
                onChange={handleDateChange}
                className="reservations-date"
                min={myDate}
                required={true}
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
                onChange={handleChange}
                required={true}
              >
                Time
                {availableTimes.map((times) => (
                  <option key={times} value={times}>
                    {times}
                  </option>
                ))}
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
              onChange={handleChange}
              required={true}
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
              onChange={handleChange}
              required={true}
            >
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
            </select>
          </label>
        </div>
        <h2>Your Reservation Summary</h2>
        <p
          className="reservation-summary"
          style={{ textTransform: "uppercase" }}
        >
          {" - "}
          {"Party Of "}
          {value.party}

          <br />
          <br />
          {" - "}
          {new Date(value.date).toDateString()}
          <br />
          <br />

          {" - "}
          {value.time}

          <br />
          <br />
          {" - "}
          {value.occasion}

          <br />
          <br />
          {" - "}
          {value.seating}
          <br />
          <br />
        </p>
      </div>
    </form>
  );
}

export default ContactInfo;
