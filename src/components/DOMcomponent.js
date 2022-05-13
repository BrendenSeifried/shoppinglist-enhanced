import React, { useState } from 'react';
import { useItemContext } from '../context/ItemContext';

export default function DOMcomponent({ items }) {
  const { removeGrocery, editGrocery, editItem, setEditItem } =
    useItemContext();
  const [edit, setEdit] = useState(false);

  const editBtn = () => {
    setEdit(!edit);
  };
  return (
    <div>
      {edit && (
        <>
          <input
            placeholder="Enter Changes Here."
            type="text"
            value={editItem.id}
            onChange={(e) => setEditItem(e.target.value)}
          />
          <button onClick={() => editGrocery(items.id)}>SAVE</button>
        </>
      )}
      <p>{items.item}</p>

      <button onClick={editBtn}>{edit ? 'CLOSE' : 'EDIT'}</button>
      <button onClick={() => removeGrocery(items.id)}>Remove</button>
    </div>
  );
}
