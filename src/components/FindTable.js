import React from "react";
import "./Booking.css";

function FindTable({
  value,
  handleChange,
  //myDate,
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
                min={new Date().toJSON().slice(0, 10)}
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
                  <option data-testid="time-option" key={times} value={times}>
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
          style={{ fontSize: "1.2rem", marginBottom: "1rem" }}
        >
          {" - "}
          {"Party of "}
          {value.party}
        </p>
        <p style={{ textTransform: "capitalize", color: "white" }}>
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
        </p>
      </div>
    </form>
  );
}

export default FindTable;
