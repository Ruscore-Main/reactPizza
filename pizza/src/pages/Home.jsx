import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/actions/filters';

import { PizzaCard, Categories, SortPopup } from './../components';

const Home = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector(({pizzas})=>pizzas.items);

  const onSelectCategory = index => dispatch(setCategory(index))
  
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((pizza) => (
          <PizzaCard {...pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
};
export default Home;
