import React, { useState } from "react";
import "./Booking.css";
import FindTable from "./FindTable";
import ContactInfo from "./ContactInfo";
import Confirmation from "./Confirmation";
import { useNavigate } from "react-router-dom";

function BookingForm({
  value,
  values,
  handleChange,
  myDate,
  availableTimes,
  handleDateChange,
  handleSubmit,
  handleCheckbox,
}) {
  const [page, setPage] = useState(0);
  const formTitle = ["Find a Table", "Contact Information", "Confirmation"];

  const pageHandle = () => {
    if (page === 0) {
      return (
        <FindTable
          values={values}
          value={value}
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
          value={value}
          handleChange={handleChange}
          handleCheckbox={handleCheckbox}
        />
      );
    } else if (page === 2) {
      return <Confirmation value={value} values={values} />;
    }
  };
  const navigate = useNavigate();

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };
  return (
    <div className="form">
      <div className="progress-bar"></div>
      <div className="reservations">
        <div className="reservations-container">
          <h1>{formTitle[page]}</h1>
          <div className="form-body">{pageHandle()}</div>
          {page === 2 ? (
            <div className="form-footer-done">
              <button className="form-btn" onClick={navigateHome}>
                Done
              </button>
            </div>
          ) : (
            <div className="form-footer">
              <button
                className="form-btn"
                disabled={page === 0}
                onClick={() => setPage((currentPage) => currentPage - 1)}
              >
                Previous
              </button>
              <button
                className="form-btn"
                onClick={() => {
                  if (page === formTitle.length - 2) {
                    // alert("Form Submitted");
                    console.log(values);

                    setPage((currentPage) => currentPage + 1);
                  } else {
                    setPage((currentPage) => currentPage + 1);
                  }
                }}
              >
                {page === formTitle.length - 2 ? "Submit" : "Next"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
