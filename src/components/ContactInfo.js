import React from "react";
import "./Booking.css";

function ContactInfo({ value, handleChange, handleCheckbox }) {
  return (
    <div className="contact-info">
      <div className="contact-info-container">
        <div className="contact-name-container">
          <label>
            First name
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={value.firstName}
              onChange={handleChange}
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={value.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="email-container">
          <label>
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={value.email}
              onChange={handleChange}
              autoComplete="on"
            />
          </label>
        </div>
        <div className="phone-number-container">
          <label>
            Phone number
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="(123) 456-7890"
              value={value.phone}
              onChange={handleChange}
              autoComplete="on"
            />
          </label>
        </div>
        <div className="textarea-container">
          <label htmlFor="request" className="special-request-label">
            Add special request (optional)
          </label>
          <textarea
            name="request"
            id="request"
            cols="60"
            rows="10"
            value={value.request}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="policy-input-container">
          <input
            className="policy-checkbox"
            type="checkbox"
            name="policy"
            id="policy"
            value={value.policy}
            onChange={handleCheckbox}
          />
          <label htmlFor="policy">
            I agree with the Little Lemon’s Reservation Policy.
          </label>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
