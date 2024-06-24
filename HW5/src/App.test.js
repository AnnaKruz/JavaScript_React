import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // eslint-disable-next-line testing-library/no-node-access
  const title = document.querySelector("h1");
  expect(title).toBeInTheDocument();
});
