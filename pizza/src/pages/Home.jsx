import React from 'react';
import { PizzaCard, Categories, SortPopup } from './../components';

const Home = props => {
    let {pizzas} = props;
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClick={(name) => console.log(name)}
                    items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
                />
                <SortPopup items={['популярности', 'цене', 'алфавиту']} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                
                {pizzas.map( pizza => <PizzaCard {...pizza}  key={pizza.id}/>)}

            </div>
        </div>
    );
};
export default Home;
