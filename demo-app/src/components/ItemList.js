import React from 'react';

export const ItemList = ({ items, onDeleteItem }) => {
  return <ul>
    {items.map( (item) =>
      <li key={item.id}>
        {item.name}
        <button type="button" onClick={() => onDeleteItem(item.id)}>X</button>
      </li>)}
  </ul>;
};
