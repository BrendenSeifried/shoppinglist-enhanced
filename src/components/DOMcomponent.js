import React from 'react';
import { useItemContext } from '../context/ItemContext';

export default function DOMcomponent({ items }) {
  const { removeGrocery, setGrocery, grocery, edit, editGrocery } =
    useItemContext();
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

      <button onClick={editGrocery}>{edit ? 'SAVE' : 'EDIT'}</button>
      <button onClick={() => removeGrocery(items.id)}>Remove</button>
    </div>
  );
}
