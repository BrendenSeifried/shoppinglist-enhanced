import React from 'react';
import { useItemContext } from '../context/ItemContext';

export default function DOMcomponent({ items }) {
  const { removeGrocery } = useItemContext();
  return (
    <div>
      <button>EDIT</button>
      <p>{items.item}</p>

      <button onClick={() => removeGrocery(items.id)}>Remove</button>
    </div>
  );
}
