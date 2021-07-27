import './index.scss';

import { Home, Basket } from './pages';
import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Header from './components/Header';
import React from 'react';
import { setPizzas } from './redux/actions/pizzas';


class App extends React.Component {
  
  componentDidMount () {
    axios.get('http://localhost:3000/db.json')
    .then(resp => this.props.setPizzas(resp.data.pizzas))
  }

  render () {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home pizzas={this.props.items}/>} />
          <Route exact path="/basket" render={Basket} />
        </div>
      </div>
    );
  }
}

// const App = () => {

//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json')
//     .then(resp => setPizzas(resp.data.pizzas))
//   }, []);

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route exact path="/" render={() => <Home pizzas={pizzas}/>} />
//         <Route exact path="/basket" render={Basket} />
//       </div>
//     </div>
//   );
// };

const mapStateToProps = state => ({
  items: state.pizzas.items
})

export default connect(mapStateToProps, {setPizzas})(App);
