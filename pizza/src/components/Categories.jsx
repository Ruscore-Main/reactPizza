import React, { useState } from 'react';

const Categories = ({ items, onClick }) => {

    const [activeItem, setActiveItem] = useState(null);

    return (
        <div className="categories">
            <ul>
                <li className={`${ activeItem === null ? 'active' : ''}`} onClick={() => setActiveItem(null)} >Все</li>
                {items && items.map((name, i) => 
                <li
                    className={`${i === activeItem ? 'active' : ''}`}
                    onClick={() => setActiveItem(i)}
                    key={`${name}_${i}`}>
                    {name}
                </li>)}
            </ul>
        </div>
    );
};

// class Categories extends React.Component {

//     state = {
//         activeIndex: null
//     };

//     handleClick = activeIndex => {
//         this.setState({activeIndex})
//     }

//     render() {
//         const {items} = this.props;
//         return (
//             <div className="categories">
//                 <ul>
//                     <li className='active'>Все</li>
//                     {items.map((name, i) => <li className={`${this.state.activeIndex === i ? 'active' : ''}`} onClick={() => this.handleClick(i)} key={`${name}_${i}`}>{name}</li>)}
//                 </ul>
//             </div>
//         )
//     }

// }


export default Categories;
