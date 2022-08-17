import React from 'react';
import Item from '../components/Item';

function ItemListContainer({ items }) {
  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <h2 id="item-list-title">Weekly Best</h2>
        {items.map((item, idx) => <Item item={item} key={idx} />)}
      </div>
    </div>
  );
}

export default ItemListContainer;
