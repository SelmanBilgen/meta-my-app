import React from "react";

function Confirmation({ values }) {
  return (
    <div className="confirmation">
      <div className="confirmation-container">
        <br />
        <h2>
          {values.firstName} {values.lastName}
        </h2>

        <h2>Your Reservation is Confirmed</h2>
        <br />
        <h3>Confirmation email is sent to:</h3>
        <h3>{values.email}</h3>
        <br />
        <h3>
          {" | "}
          {new Date(values.date).toDateString()}
          {" | "}

          {values.time}
          {" | "}

          {"Party of "}
          {values.party}
          {" | "}
        </h3>
      </div>
    </div>
  );
}

export default Confirmation;
