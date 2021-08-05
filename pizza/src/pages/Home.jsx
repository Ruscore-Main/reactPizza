import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { useEffect } from "react";

import { PizzaCard, Categories, SortPopup } from "./../components";
import LoaderPizzaBlock from "../components/LoaderPizzaBlock";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortTypes = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "name" },
];

const Home = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    // Тут собсна и достаём все питсы
    if (!pizzas.length) {
      dispatch(fetchPizzas());
    }
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) =>
    dispatch(setCategory(index))
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} activeCategory={category} />
        <SortPopup items={sortTypes} currentSort={sortBy}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((pizza) => <PizzaCard {...pizza} key={pizza.id} />)
          : Array.from(Array(10), (_, index) => (
              <LoaderPizzaBlock key={index} />
            ))}
      </div>
    </div>
  );
};

export default Home;
