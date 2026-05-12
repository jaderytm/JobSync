// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders JobSync title', () => {
    render(<App />);
    const titleElement = screen.getByText(/JobSync/i);
    expect(titleElement).toBeInTheDocument();
});
