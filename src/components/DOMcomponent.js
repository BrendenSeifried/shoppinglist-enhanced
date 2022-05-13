import React, { useState } from 'react';
import { useItemContext } from '../context/ItemContext';

export default function DOMcomponent({ items }) {
  const {
    removeGrocery,
    setGrocery,
    grocery,
    editGrocery,
    editItem,
    setEditItem,
  } = useItemContext();
  const [edit, setEdit] = useState(false);

  const editBtn = () => {
    setEdit(!edit);
  };
  return (
    <div>
      {edit && (
        <>
          <input
            type="text"
            value={editItem}
            onChange={(e) => setEditItem(e.target.value)}
          />
          <button onClick={editGrocery}>SAVE</button>
        </>
      )}
      <p>{items.item}</p>

      <button onClick={editBtn}>{edit ? 'CLOSE' : 'EDIT'}</button>
      <button onClick={() => removeGrocery(items.id)}>Remove</button>
    </div>
  );
}
