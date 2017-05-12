import React from 'react';

const ItemDetail = ({item}) => {
  item = item || {};
  return (
    <ul>
      <li>{item.name}</li>
      <li>{item.price}</li>
      <li>{item.happiness}</li>
    </ul>
  );
};

export default ItemDetail;
