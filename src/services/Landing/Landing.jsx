import React, { useEffect, useState } from 'react';
import DOMcomponent from '../../components/DOMcomponent';
import { useItemContext } from '../../context/ItemContext';

export default function Landing() {
  // const [allItems, setAllItems] = useState([]);

  const { allItems, submitGrocery, setGrocery, grocery, clearAll } =
    useItemContext();

  // const [item, setItem] = useState('');

  return (
    <>
      <div>
        Landing
        <label>
          Enter a grocery item:
          <input
            placeholder="Enter Item Here."
            type="text"
            value={grocery}
            onChange={(e) => setGrocery(e.target.value)}
          />
        </label>
        <button onClick={submitGrocery}>Add</button>
        <button onClick={clearAll}>Clear Cart</button>
      </div>
      {allItems.map((items) => (
        <div key={items.id}>
          <DOMcomponent items={items} />
        </div>
      ))}
    </>
  );
}
