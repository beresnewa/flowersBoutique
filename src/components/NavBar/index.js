import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


import { ROUTES } from '../../const';
import './style.css';

const NavBar = () => {
  const bouquetsInBasket = useSelector(state => state.bouquets.inBasket);
  let countProduct = 0;
  Object.values(bouquetsInBasket).map(element => {
    return countProduct += element.count;
  })
    return (
      <nav className="navbar">
        <Link to={ROUTES.MAIN}>Главная</Link>
        <Link to={ROUTES.RENDERBOUQUET}>Составить букет</Link>
        <Link to={ROUTES.BASKET} className="buttonBasket"><img alt="basket" src="/img/icons8-корзина.png"/>{countProduct}</Link>
      </nav>
    );
};

export default NavBar;