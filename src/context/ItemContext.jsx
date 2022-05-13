import { createContext, useContext, useReducer, useState } from 'react';

const initItem = [{ id: Date.now(), item: 'ToiletPaper' }];

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEW':
      return [{ id: Date.now(), item: action.payload.item }, ...state];
    case 'CLEARALL':
      return [];

    case 'REMOVE':
      return state.filter((check) => action.payload.id !== check.id);

    case 'EDIT':
      return state.map((check) => {
        if (action.payload.id === check.id) {
          return { ...check, item: action.payload.item };
        }
        return check;
      });
    default:
      return state;
  }
};

let counter = 0;
const ItemContext = createContext();
const ContextProvider = ({ children }) => {
  const [grocery, setGrocery] = useState(''); ////text to enter item
  const [allItems, dispatch] = useReducer(reducer, initItem); ///dispatch and array of items
  const [editItem, setEditItem] = useState('');

  console.log(counter);

  /////ADDING NEW GROCERY
  const submitGrocery = () => {
    dispatch({ type: 'NEW', payload: { item: grocery } });
    setGrocery('');
    counter++;
  };
  ////////////////////////////

  /////////DELETE ALL GROCERY
  const clearAll = (id) => {
    dispatch({ type: 'CLEARALL', payload: { id } });
    counter = 0;
  };
  ///////////////

  /////////REMOVE GROCERY
  const removeGrocery = (id) => {
    dispatch({ type: 'REMOVE', payload: { id } });
    counter--;
  };
  ///////////////

  //////EDIT GROCERY
  const editGrocery = (id) => {
    dispatch({ type: 'EDIT', payload: { item: editItem, id } });
  };
  ///////////////////////

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
        editItem,
        setEditItem,
        counter,
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
