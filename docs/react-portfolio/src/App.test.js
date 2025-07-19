import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio heading', () => {
  render(<App />);
  const heading = screen.getByText(/Data Science Portfolio/i);
  expect(heading).toBeInTheDocument();
});
