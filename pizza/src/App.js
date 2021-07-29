import './index.scss';

import { Home, Basket } from './pages';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import React from 'react';
import { setPizzas } from './redux/actions/pizzas';


const App = () => {

  const dispatch = useDispatch();

  useEffect(()=> {
    axios.get('http://localhost:3001/db.json')
    .then(resp => dispatch(setPizzas(resp.data.pizzas)))
  }, [])


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/basket" render={Basket} />
      </div>
    </div>
  );
}

export default App;