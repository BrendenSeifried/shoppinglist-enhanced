import { array } from 'prop-types';
import { createContext, useContext, useReducer, useState } from 'react';

const initItem = [{ id: Date.now(), item: 'ToiletPaper' }];

const reducer = (state, action) => {
  console.log('state', state);
  console.log('action.type', action.type);
  console.log('action.payload', action.payload);

  switch (action.type) {
    case 'NEW':
      return [{ id: Date.now(), item: action.payload.item }, ...state];
    case 'CLEARALL':
      return [];

    case 'REMOVE':
      return state.filter((check) => action.payload.id !== check.id);

    case 'EDIT':
      return state.filter((check) => {
        if (action.payload.id === check.id) return action.payload.item;
        return check;
      });
    default:
      return state;
  }
};

const ItemContext = createContext();
const ContextProvider = ({ children }) => {
  const [grocery, setGrocery] = useState(''); ////text to enter item
  const [allItems, dispatch] = useReducer(reducer, initItem); ///dispatch and array of items

  /////ADDING NEW GROCERY
  const submitGrocery = () => {
    dispatch({ type: 'NEW', payload: { item: grocery } });
    setGrocery('');
  };
  ////////////////////////////

  /////////DELETE ALL GROCERY
  const clearAll = (id) => {
    dispatch({ type: 'CLEARALL', payload: { id } });
  };
  ///////////////

  /////////REMOVE GROCERY
  const removeGrocery = (id) => {
    dispatch({ type: 'REMOVE', payload: { id } });
  };
  ///////////////

  ////////EDIT GROCERY
  const editGrocery = (id) => {
    dispatch({ type: 'EDIT', payload: { item: grocery, id } });
  };
  /////////////////////////

  return (
    <ItemContext.Provider
      value={{
        allItems,
        submitGrocery,
        setGrocery,
        grocery,
        clearAll,
        removeGrocery,
        editGrocery,
      }}
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
