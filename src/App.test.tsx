import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import App from './App';

describe('App Component', () => {
  test('renders initial count and increments count on button click', async () => {
    render(<App />);

    const countButton = screen.getByRole('button', { name: /count is 0/i });
    expect(countButton).toBeInTheDocument();

    await userEvent.click(countButton);
    expect(countButton).toHaveTextContent('count is 1');

    await userEvent.click(countButton);
    expect(countButton).toHaveTextContent('count is 2');
  });

  test('renders headings and paragraph texts correctly', () => {
    render(<App />);

    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
});
