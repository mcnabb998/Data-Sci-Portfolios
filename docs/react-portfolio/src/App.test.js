import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const header = screen.getByText(/Data Science Portfolio/i);
  expect(header).toBeInTheDocument();
});
