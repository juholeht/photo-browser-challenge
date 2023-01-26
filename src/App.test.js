import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Photo browser text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Photo browser/i);
  expect(linkElement).toBeInTheDocument();
});
