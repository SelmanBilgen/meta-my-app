import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactInfo from './ContactInfo';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
//import BookingMain from '../BookingMain';
// import { jest } from '@jest/globals';
//import BookingMain from '../BookingMain';
//import BookingForm from '../BookingForm';
// describe('Contact info page', () => {
//   test('Renders the Confirmation heading', () => {
// const values = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   phone: '',
//   request: '',
//   policy: true,
// };

//     const focused = {
//       firstName: false,
//       lastName: false,
//       email: false,
//       phone: false,
//       policy: true,
//     };

//     const handleFocus = () => jest.fn();
//     const handleChange = () => jest.fn();
//     const handleCheckbox = () => jest.fn();

//     const handleFocusCheckbox = () => jest.fn();

//     render(
//       <Router>
//         <ContactInfo
//           values={values}
//           handleChange={handleChange}
//           handleCheckbox={handleCheckbox}
//           focused={focused}
//           handleFocus={handleFocus}
//           handleFocusCheckbox={handleFocusCheckbox}
//         />
//       </Router>
//     );
//     const input = screen.getByRole('textbox', {
//       name: /first name/i,
//     });
//     const value = 'Peace';
//     //await userEvent.type(input, 'Peace');
//     fireEvent.change(input, { target: { value } });
//     expect(input.value).toBe('Peace');
//   });
// });

// describe('Contact info page 1', () => {
//   it('Renders the Confirmation heading', () => {
//     const values = {
//       firstName: 'Peace',
//       lastName: '',
//       email: '',
//       phone: '',
//       request: '',
//       policy: true,
//     };

//     const focused = {
//       firstName: false,
//       lastName: false,
//       email: false,
//       phone: false,
//       policy: true,
//     };

//     const handleFocus = () => jest.fn();
//     const handleChange = () => jest.fn();
//     const handleCheckbox = () => jest.fn();

//     const handleFocusCheckbox = () => jest.fn();

//     const { getByTestId } = render(
//       <Router>
//         <ContactInfo
//           values={values}
//           handleChange={handleChange}
//           handleCheckbox={handleCheckbox}
//           focused={focused}
//           handleFocus={handleFocus}
//           handleFocusCheckbox={handleFocusCheckbox}
//         />
//       </Router>
//     );
//     const firstName = getByTestId('firstName');
//     console.log(firstName);
//     const input = screen.getByRole('textbox', {
//       name: /first name/i,
//     });
//     const value = 'Peace';
//     //await userEvent.type(input, 'Peace');
//     //fireEvent.change(input, { target: { value } });
//     expect(input.value).toBe('Peace');
//   });
// });

//describe('Contact info page', () => {
it('Renders the Confirmation heading', async () => {
  //const user = userEvent.setup();
  //const user = userEvent.setup();
  const values = {};

  const focused = {
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    policy: true,
  };

  const handleFocus = jest.fn();
  const handleChange = jest.fn();
  // jest.fn((x) => {
  //   console.log(x);
  //   values.firstName = x;
  // });
  const handleCheckbox = jest.fn();
  const handleFocusCheckbox = jest.fn();

  function setup(jsx) {
    return {
      user: userEvent.setup(),
      // Import `render` from the framework library of your choice.
      // See https://testing-library.com/docs/dom-testing-library/install#wrappers
      ...render(jsx),
    };
  }

  const { user } = setup(
    <Router>
      <ContactInfo
        values={values}
        handleChange={handleChange}
        handleCheckbox={handleCheckbox}
        focused={focused}
        handleFocus={handleFocus}
        handleFocusCheckbox={handleFocusCheckbox}
      />
    </Router>
  );

  const input = screen.getByRole('textbox', { name: /first name/i });
  //const value = 'Peace';
  //await userEvent.type(input, 'Peace');

  //fireEvent.click(input);
  //fireEvent.change(input, { target: { value: 'Peace' } });
  // await userEvent.click(input, 'Peace');

  //await user.click(input);
  //await user.keyboard('Pe');

  //console.log(input);
  //expect(handleChange).toHaveBeenCalled();
  //expect(handleChange).toHaveBeenCalledWith('veli');
  //expect(input.value).toBe('Peace');
  //expect(screen.queryByText('First name should be 3-16 characters')).toBeInTheDocument();
  screen.debug();
});
//});
