import React, { useState } from 'react';
import '../Booking.css';

function ContactInfo({
  values,
  handleChange,
  handleCheckbox,
  focused,
  handleFocus,
  handleFocusCheckbox,
}) {
  return (
    <div className='contact-info'>
      <div className='contact-info-container'>
        <div className='contact-name-container'>
          <label>
            First name
            <input
              data-testid='first-name'
              type='text'
              name='firstName'
              id='firstName'
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleFocus}
              focused={focused.firstName.toString()}
              pattern='^[A-Za-z0-9]{3,16}$'
              required={true}
            />
            <span>
              First name should be 3-16 characters and shouldn't include any
              special character!
            </span>
          </label>

          <label>
            Last name
            <input
              type='text'
              name='lastName'
              id='lastName'
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleFocus}
              focused={focused.lastName.toString()}
              pattern='^[A-Za-z0-9]{3,16}$'
              required={true}
            />
            <span>
              Last name should be 3-16 characters and shouldn't include any
              special character!
            </span>
          </label>
        </div>
        <div className='email-container'>
          <label>
            Email
            <input
              type='email'
              name='email'
              id='email'
              className='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleFocus}
              focused={focused.email.toString()}
              autoComplete='on'
              required={true}
            />
            <span>Email should be a valid email address.</span>
          </label>
        </div>
        <div className='phone-number-container'>
          <label>
            Phone number
            <input
              type='tel'
              name='phone'
              id='phone'
              placeholder='123-456-7890'
              value={values.phone}
              onChange={handleChange}
              onBlur={handleFocus}
              focused={focused.phone.toString()}
              autoComplete='on'
              pattern='^(?!123-456-7890)[0-9]{3}-[0-9]{3}-[0-9]{4}$'
              required={true}
            />
            <span>Phone number should match the format!</span>
          </label>
        </div>
        <div className='textarea-container'>
          <label htmlFor='request' className='special-request-label'>
            Add special request (optional)
          </label>
          <textarea
            name='request'
            id='request'
            rows='4'
            value={values.request}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='policy-input-container'>
          <input
            className='policy-checkbox'
            type='checkbox'
            name='policy'
            id='policy'
            value={values.policy}
            onChange={handleCheckbox}
            onBlur={handleFocusCheckbox}
            focused={focused.policy.toString()}
            pattern="$('div.checkbox-group.required :checkbox:checked').length > 0"
            required={true}
            checked={values.policy}
          />

          <label htmlFor='policy'>
            I agree with the Little Lemon’s Reservation Policy.
          </label>
        </div>
        {!values.policy ? (
          <p style={{ color: 'red' }}>
            Little Lemon’s Reservation Policy should be checked.
          </p>
        ) : (
          <span>*</span>
        )}
      </div>
    </div>
  );
}

export default ContactInfo;
