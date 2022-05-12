import React, { useEffect, useState } from 'react';
import { useItemContext } from '../../context/ItemContext';

export default function Landing() {
  // const [allItems, setAllItems] = useState([]);

  const { allItems, submitGrocery, setGrocery, grocery, clearAll } =
    useItemContext();

  // const [item, setItem] = useState('');
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const placeItems = async () => {
      setLoad(false);
    };
    placeItems();
  }, []);

  if (load) return <h1>Loading</h1>;

  return (
    <>
      <div>
        Landing
        <label>
          Enter a grocery item:
          <input
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
          <p>{items.item}</p>

          <button>Remove</button>
        </div>
      ))}
    </>
  );
}
