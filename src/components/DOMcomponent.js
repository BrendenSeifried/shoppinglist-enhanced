import React, { useState } from 'react';
import { useItemContext } from '../context/ItemContext';

export default function DOMcomponent({ items }) {
  const { removeGrocery, setGrocery, grocery, editGrocery } = useItemContext();
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
            value={grocery}
            onChange={(e) => setGrocery(e.target.value)}
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
