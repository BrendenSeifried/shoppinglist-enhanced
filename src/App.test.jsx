import { render, screen } from '@testing-library/react';
import App from './App';
import { ContextProvider } from './context/ItemContext';

describe('Component test', () => {
  it('testing to see if Clear Cart Renders', () => {
    render(
      <ContextProvider>
        <App />
      </ContextProvider>
    );
    const compTest1 = screen.getByText('Clear Cart');
    expect(compTest1).toBeInTheDocument();
    screen.debug();
  });
});
