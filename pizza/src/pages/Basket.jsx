import React from 'react';
import { useSelector } from 'react-redux';

import BasketFull from './BasketFull';
import BasketEmpty from './BasketEmpty';

const Basket = () => {
  const {totalCount} = useSelector(state => state.cart);

  return (
    <>
      {
      totalCount ? 
      <BasketFull />
      :<BasketEmpty />
      }
    </>
  );
};

export default Basket;
