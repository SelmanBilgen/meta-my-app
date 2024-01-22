import { render, screen } from '@testing-library/react';
import Confirmation from './Confirmation';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Confirmation page', () => {
  let values = {
    party: '',
    date: '',
    time: '',
    occasion: '',
    seating: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    request: '',
    policy: '',
  };
  test('Renders the Confirmation heading', () => {
    render(
      <Router>
        <Confirmation values={values} />
      </Router>
    );
    const headingElement = screen.getByText(
      /Your reservation has been confirmed/i
    );
    expect(headingElement).toBeInTheDocument();
  });
});
