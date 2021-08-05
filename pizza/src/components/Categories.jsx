import React, { useState } from 'react';


const Categories = React.memo(({ activeCategory, items, onClickItem }) => {

  return (
    <div className="categories">
      <ul>
        <li
          className={`${activeCategory === null ? 'active' : ''}`}
          onClick={() => onClickItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, i) => (
            <li
              className={`${i === activeCategory ? 'active' : ''}`}
              onClick={() => onClickItem(i)}
              key={`${name}_${i}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
