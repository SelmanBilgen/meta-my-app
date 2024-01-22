import { render, screen, fireEvent } from '@testing-library/react';
import BookingMain from '../components/BookingForm/BookingMain';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Booking page', () => {
  test('Renders the BookingMain heading', () => {
    render(
      <Router>
        <BookingMain />
      </Router>
    );
    const headingElement = screen.getByText(/your reservation summary/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('should render initialTimes array as initial time options', () => {
    render(
      <Router>
        <BookingMain />
      </Router>
    );
    const initialTimes = ['21:00', '21:30', '22:00', '22:30', '23:00'];
    const times = screen
      .getAllByTestId('time-option')
      .map((item) => item.value);

    expect(times).toStrictEqual(initialTimes);
  });

  test('should update available booking time options after changing booking date', () => {
    render(
      <Router>
        <BookingMain />
      </Router>
    );
    const bookingDate = '2023-09-23';
    const dateInput = screen.getByLabelText(/Date/);
    const times = screen
      .getAllByTestId('time-option')
      .map((item) => item.value);
    fireEvent.change(dateInput, { target: { value: bookingDate } });
    const times2 = screen
      .getAllByTestId('time-option')
      .map((item) => item.value);
    expect(times).not.toContain(times2);
  });
});
