import React from 'react';

export const ItemList = ({ items }) => {
  return <ul>
    {items.map( (item, index) => <li key={index}><div>{item}</div></li>)}
  </ul>;
};
