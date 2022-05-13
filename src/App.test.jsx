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

    const paperTest2 = screen.getByText('ToiletPaper');
    expect(paperTest2).toBeInTheDocument();

    ///find edit button
    const findEdit = screen.getByText('EDIT');
    expect(findEdit).toBeInTheDocument();

    userEvent.click(findEdit);
    ///

    ///find Edit button and click it
    const findInput2 = screen.getByPlaceholderText('Enter Changes Here.');
    expect(findInput2).toBeInTheDocument();

    userEvent.type(findInput2, 'test2');
    ///

    ///find and click Save
    const findSave = screen.getByText('SAVE');
    expect(findSave).toBeInTheDocument();

    userEvent.click(findSave);
    ///

    ///testing if the item 'test2' is now rendered to the screen.
    const testing2 = screen.getByText('test2');
    expect(testing2).toBeInTheDocument();
    ///
  });
});

describe('test for clear all functionality', () => {
  it('test for clear all', () => {
    render(
      <ContextProvider>
        <App />
      </ContextProvider>
    );
    const findTextField = screen.getByPlaceholderText('Enter Item Here.');
    expect(findTextField).toBeInTheDocument();

    userEvent.type(findTextField, 'first');

    const addFirst = screen.getByText('Add');
    userEvent.click(addFirst);

    userEvent.type(findTextField, 'second');
    userEvent.click(addFirst);

    const firstTest = screen.getByText('first');
    expect(firstTest).toBeInTheDocument();

    const secondTest = screen.getByText('second');
    expect(secondTest).toBeInTheDocument();
  });
});
