import { createContext, useContext, useReducer, useState } from 'react';

const initItem = [{ id: Date.now(), item: 'ToiletPaper' }];

const reducer = (state, action) => {
  console.log('state', state);
  console.log('action.type', action.type);
  console.log('action.payload', action.payload);

  switch (action.type) {
    case 'NEW':
      return [{ id: Date.now(), item: action.payload.item }, ...state];
    default:
      return state;
  }
};

const ItemContext = createContext();
const ContextProvider = ({ children }) => {
  const [grocery, setGrocery] = useState('');
  const [allItems, dispatch] = useReducer(reducer, initItem);

  const submitGrocery = () => {
    dispatch({ type: 'NEW', payload: { item: grocery } });
    setGrocery('');
  };

  return (
    <ItemContext.Provider
      value={{ allItems, submitGrocery, setGrocery, grocery }}
    >
      {children}
    </ItemContext.Provider>
  );
};

const useItemContext = () => {
  const info = useContext(ItemContext);
  if (info === undefined) {
    throw new Error('Contextual wrapping issue.');
  }
  return info;
};

export { ContextProvider, useItemContext };
