import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import BookingMain from '../components/BookingForm/BookingMain';

describe('ContactInfo page', () => {

  test('shows the ContactInfo inputs validation texts when they are focused but not valid', async () => {
  
  const user = userEvent.setup()
  render(
    <Router>
      <BookingMain />
    </Router>
  );
  const nextButton = screen.getByRole('button', {name:/next/i});
  await user.click(nextButton);

  const firstNameInput = screen.getByRole('textbox', {name:/first name/i});
  const lastNameInput = screen.getByRole('textbox', {name:/last name/i});
  const emailInput = screen.getByRole('textbox', {name:/email/i});
  const phoneInput = screen.getByRole('textbox', {name:/phone/i});
  const policyInput = screen.getByRole('checkbox', {name:/policy/i});

  
  await user.click(firstNameInput);
  await user.click(lastNameInput);
  await user.click(emailInput)
  await user.click(phoneInput)
  await user.click(policyInput)

    
  const firstNameInputValidationText = screen.getByText(/first name should be 3-16/i)
  const lastNameInputValidationText = screen.getByText(/last name should be 3-16/i);
  const emailInputValidationText = screen.getByText(/email should be a valid email address/i);
  const phoneInputValidationText = screen.getByText(/phone number should match the format!/i);
  const policyInputValidationText = screen.getByText(/Little Lemon’s Reservation Policy should be checked/i);
    

  expect(firstNameInputValidationText).toBeInTheDocument();
  expect(lastNameInputValidationText).toBeInTheDocument();
  expect(emailInputValidationText).toBeInTheDocument();
  expect(phoneInputValidationText).toBeInTheDocument();
  expect(policyInputValidationText).toBeInTheDocument();

  });
  test('does not show the ContactInfo inputs validation texts when the page first renders', async () => {
    const user = userEvent.setup()
    render(
      <Router>
        <BookingMain />
      </Router>
    );
  const nextButton = screen.getByRole('button', {name:/next/i});
  await user.click(nextButton);
    
  const firstNameInputValidationText = screen.queryByText(/first name should be 3-16/i)
  const lastNameInputValidationText = screen.queryByText(/last name should be 3-16/i);
  const emailInputValidationText = screen.queryByText(/email should be a valid email address/i);
  const phoneInputValidationText = screen.queryByText(/phone number should match the format!/i);
  const policyInputValidationText = screen.queryByText(/Little Lemon’s Reservation Policy should be checked/i);
    

  expect(firstNameInputValidationText).not.toBeInTheDocument();
  expect(lastNameInputValidationText).not.toBeInTheDocument();
  expect(emailInputValidationText).not.toBeInTheDocument();
  expect(phoneInputValidationText).not.toBeInTheDocument();
  expect(policyInputValidationText).not.toBeInTheDocument();

});

test('shows the First name inputs validation text when 2 letter word is written', async () => {
  
  const user = userEvent.setup()
render(
  <Router>
    <BookingMain />
  </Router>
);
const nextButton = screen.getByRole('button', {name:/next/i});
await user.click(nextButton);

const firstNameInput = screen.getByRole('textbox', {name:/first name/i});
const lastNameInput = screen.getByRole('textbox', {name:/last name/i});

await user.click(firstNameInput);
await user.click(lastNameInput);
await user.type(firstNameInput, "Sa")

const firstNameInputValidationText = screen.getByText(/first name should be 3-16/i)

expect(firstNameInputValidationText).toBeInTheDocument();


});
test('shows the First name inputs validation text when 3 letter word is written', async () => {
  
  const user = userEvent.setup()
render(
  <Router>
    <BookingMain />
  </Router>
);
const nextButton = screen.getByRole('button', {name:/next/i});
await user.click(nextButton);

const firstNameInput = screen.getByRole('textbox', {name:/first name/i});
const lastNameInput = screen.getByRole('textbox', {name:/last name/i});

await user.click(firstNameInput);
await user.click(lastNameInput);
await user.type(firstNameInput, "Sam")
  
const firstNameInputValidationText = screen.queryByText(/first name should be 3-16/i)


expect(firstNameInputValidationText).not.toBeInTheDocument();


});
})
