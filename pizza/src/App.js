import './index.scss';

import { Home, Basket } from './pages';
import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
    .then(resp => setPizzas(resp.data.pizzas))
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home pizzas={pizzas}/>} />
        <Route exact path="/basket" render={Basket} />
      </div>
    </div>
  );
};

export default App;
