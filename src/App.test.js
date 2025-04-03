import { render, screen } from '@testing-library/react';
import App from './App';

test('Erika Ortiz ID 456980, In class assesment', () => {
  render(<App />);
  const linkElement = screen.getByText(/Erika Ortiz ID 456980, In class assesment/i);
  expect(linkElement).toBeInTheDocument();
});
