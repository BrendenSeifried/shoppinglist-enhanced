import { render, screen } from '@testing-library/react';
import App from './App';
import { ContextProvider } from './context/ItemContext';
import userEvent from '@testing-library/user-event';

describe('Component test', () => {
  it('testing to see if Clear Cart Renders', () => {
    render(
      <ContextProvider>
        <App />
      </ContextProvider>
    );
    const compTest1 = screen.getByText('Clear Cart');
    expect(compTest1).toBeInTheDocument();
  });
});

describe('behaviour test 1', () => {
  it('testing add and remove button functionality', async () => {
    render(
      <ContextProvider>
        <App />
      </ContextProvider>
    );
    const paperTest = screen.getByText('ToiletPaper');
    expect(paperTest).toBeInTheDocument();

    ///find remove button
    const findRemove = screen.getByText('Remove');
    expect(findRemove).toBeInTheDocument();
    ///

    ///click remove and use screen.debug to confirm ToiletPaper has been removed
    userEvent.click(findRemove);
    ///

    ///find the input and type in test
    const findInput1 = screen.getByPlaceholderText('Enter Item Here.');
    expect(findInput1).toBeInTheDocument();

    userEvent.type(findInput1, 'test');
    ///

    /// find add button and click it
    const findAdd = screen.getByText('Add');
    expect(findAdd).toBeInTheDocument();

    userEvent.click(findAdd);
    ///

    ///confirm that test rendered to screen
    const checkTest = await screen.findByText('test');
    expect(checkTest).toBeInTheDocument();
    ///
  });
});

describe('behaviour test 2', () => {
  it('testing edit functionality', async () => {
    render(
      <ContextProvider>
        <App />
      </ContextProvider>
    );

    screen.debug();
  });
});
