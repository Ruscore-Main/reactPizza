import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';

import { useSelector } from 'react-redux';
import ImageLoader from './../assets/img/pizzaLogo.svg';

const PizzaCard = ({ id, imageUrls, name, price, sizes, types, onClickAddPizza }) => {
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(sizes[0]);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const items = useSelector(({ cart }) => cart.items);
  const onSelectType = (index) => setActiveType(index);
  const onSelectSize = (index) => {
    setImageLoaded(false);
    setActiveSize(index);
  };
  const onAddPizza = () => {
    onClickAddPizza({
      id,
      currentImageUrl,
      size: activeSize,
      type: availableTypes[activeType],
      price,
      name,
      imageUrl: imageUrls[sizes.findIndex((el) => activeSize == el)]
    });
  };
  const onImageLoad = () => {
    setImageLoaded(true);
  };
  const currentImageUrl = imageUrls[sizes.findIndex((el) => activeSize == el)];

  return (
    <div className="pizza-block">
      <img
          className="pizza-block__image"
          onLoad={onImageLoad}
          src={imageLoaded ? imageUrls[sizes.findIndex((el) => activeSize == el)] : ImageLoader}
          alt="Pizza"
        />
      

      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, index) => (
            <li
              onClick={() => onSelectType(index)}
              key={type}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size) => (
            <li
              onClick={() => onSelectSize(size)}
              key={size}
              className={classNames({
                active: activeSize === size,
                disabled: !sizes.includes(size),
              })}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button onClick={onAddPizza} outline className="button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {items[id] ? <i>{items[id].length}</i> : ''}
        </Button>
      </div>
    </div>
  );
};

PizzaCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.arrayOf(PropTypes.string.isRequired),
  price: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  types: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  onClickAddPizza: PropTypes.func.isRequired,
};

PizzaCard.defaulProps = {
  name: '-----',
  sizes: [],
  types: [],
  imageUrls: [],
};

export default PizzaCard;
