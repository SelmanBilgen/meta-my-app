import React from 'react';
import '../Booking.css';

function ContactInfo({
  values,
  handleChange,
  handleCheckbox,
  focused,
  handleFocus,
  handleFocusCheckbox,
  handleBlur,
  val,
  
}) 

{
  return (
    <div className='contact-info'>
      <div className='contact-info-container'>
        <div className='contact-name-container'>
          <label>
            First name
            <input
              className='firstName'
              data-testid='first-name'
              type='text'
              name='firstName'
              id='firstName'
              value={values.firstName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              pattern='^[A-Za-z0-9]{3,16}$'
              required={true}
            />
              {val.firstName === true |  val.firstName === null | (val.firstName === false && focused.firstName <= 1 )  ? (
          ''
        ) :(
          <span role='alert' >First name should be 3-16 characters and shouldn't include any special character!</span>
          
        )}
          </label>
          <label>
            Last name
            <input
              className='lastName'
              type='text'
              name='lastName'
              id='lastName'
              value={values.lastName}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              pattern='^[A-Za-z0-9]{3,16}$'
              required={true}
            />
            {val.lastName === true |  val.lastName === null | (val.lastName === false && focused.lastName <= 1 )  ? (
          ''
        ) : (
            <span role='alert'>
              Last name should be 3-16 characters and shouldn't include any
              special character
            </span>)}
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
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoComplete='on'
              required={true}
            />
            {val.email === true |  val.email === null | (val.email === false && focused.email <= 1 )  ? (
          ''
        ) : (
            <span role='alert'>Email should be a valid email address.</span>)}
          </label>
        </div>
        <div className='phone-number-container'>
          <label>
            Phone number
            <input
              className='phone'
              type='tel'
              name='phone'
              id='phone'
              placeholder='123-456-7890'
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoComplete='on'
              pattern='^(?!123-456-7890)[0-9]{3}-[0-9]{3}-[0-9]{4}$'
              required={true}
            />
            {val.phone === true |  val.phone === null | (val.phone === false && focused.phone <= 1 ) ? (
          ''
        ) : (
            <span role='alert'>Phone number should match the format!</span>)}
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
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='policy-input-container'>
          <input
            className='policy-checkbox'
            type='checkbox'
            name='policy'
            id='policy'
            onChange={handleCheckbox}
            onBlur={handleFocusCheckbox}
            pattern="$('div.checkbox-group.required :checkbox:checked').length > 0"
            required={true}
            checked={values.policy}
          />

          <label htmlFor='policy'>
            I agree with the Little Lemon’s Reservation Policy.
          </label>
        </div>
        {!values.policy ? (
          <p style={{ color: 'red', fontSize:"12px" }}>
            Little Lemon’s Reservation Policy should be checked.
          </p>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}

export default ContactInfo;
