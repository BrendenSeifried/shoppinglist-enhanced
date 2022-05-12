import React, { useEffect, useState } from 'react';

export default function Landing() {
  const [item, setItem] = useState('test');
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const placeItems = async () => {
      // setItem('');
      setLoad(false);
    };
    placeItems();
  }, []);

  if (load) return <h1>Loading</h1>;

  return (
    <div>
      Landing
      <input />
      <h1>{item}</h1>
    </div>
  );
}
