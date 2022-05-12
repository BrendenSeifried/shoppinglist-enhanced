import React, { useEffect, useState } from 'react';

export default function Landing() {
  const [allItems, setAllItems] = useState([]);
  const [item, setItem] = useState('');
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const placeItems = async () => {
      const data = item;
      setAllItems(data);
      setLoad(false);
    };
    placeItems();
  }, []);

  const submitItem = async () => {
    const data = item;
    setAllItems((prevState) => [...prevState, data]);
    console.log(allItems);
    setItem('');
  };

  if (load) return <h1>Loading</h1>;

  return (
    <>
      <div>
        Landing
        <label>
          Enter a grocery item:
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </label>
        <button onClick={submitItem}>Add</button>
      </div>
      <h1>{allItems}</h1>
    </>
  );
}
