import React, { useState } from 'react';

const Categories = ({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="categories">
      <ul>
        <li
          className={`${activeItem === null ? 'active' : ''}`}
          onClick={() => setActiveItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, i) => (
            <li
              className={`${i === activeItem ? 'active' : ''}`}
              onClick={() => {
                onClickItem(i);
                setActiveItem(i);
              }}
              key={`${name}_${i}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
