import React from 'react';
import { useItemContext } from '../context/ItemContext';

export default function Header() {
  const { counter } = useItemContext();
  return <div>Items in cart:{counter}</div>;
}
