import React, { useState, useEffect, useRef } from 'react';

const SortPopup = ({items}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [currentSort, setCurrentSort] = useState('популярности');
    const sortRef = useRef(null);

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []); // [] - зависимости, если изменится, то произойдет вызов эффекта. тут их нет, значит сработает только при первом рендере

    const handleOutsideClick = (e) => {
        if (!e.path.some((el) => el === sortRef.current)) setVisiblePopup(false);
    };

    // отдельно вынесли, потому что при перерендере происходит создание новой ф-ии, что замедляет работу
    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    };

    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label">
                <svg
                    className={visiblePopup ? 'rotated' : ''}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={toggleVisiblePopup}>{currentSort}</span>
            </div>
            {visiblePopup && (
                <div className="sort__popup">
                    <ul>
                        {items.map((el, i) => (
                            <li
                                key={`${el}_${i}`}
                                className={`${el === currentSort ? 'active' : ''}`}
                                onClick={() => setCurrentSort(el)}>
                                {el}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SortPopup;