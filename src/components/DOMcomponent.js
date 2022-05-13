import React, { useState } from 'react';
import { useItemContext } from '../context/ItemContext';

export default function DOMcomponent({ items }) {
  //   const { edit } = useItemContext();

  const {
    removeGrocery,
    allItems,
    submitGrocery,
    setGrocery,
    grocery,
    clearAll,
    edit,
    editBtn,
    text,
  } = useItemContext();
  return (
    <div>
      {edit && (
        <input
          type="text"
          value={grocery}
          onChange={(e) => setGrocery(e.target.value)}
        />
      )}
      <p>{items.item}</p>

      <button onClick={editBtn}>{edit ? 'EDIT' : 'SAVE'}</button>
      <button onClick={() => removeGrocery(items.id)}>Remove</button>
    </div>
  );
}
