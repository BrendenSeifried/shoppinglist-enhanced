import { createContext, useContext, useReducer, useState } from 'react';

const initItem = [{ id: Date.now(), item: 'ToiletPaper' }];

const reducer = (state, action) => {
  console.log('state', state);
  console.log('action', action);
  switch (action.item) {
    case 'NEW':
      return [{ id: Date.now(), item: action.payload.item }, ...state];
    default:
      return state;
  }
};

const ItemContext = createContext();
const ContextProvider = ({ children }) => {
  const [allItems, dispatch] = useReducer(reducer, initItem);

  const submitItem = async (item) => {
    dispatch({ type: 'NEW', payload: { item } });
  };

  return (
    <ItemContext.Provider value={{ allItems, submitItem }}>
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
