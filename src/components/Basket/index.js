import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteOneFromBasket, deleteAllFromBasket } from '../../actions/BouquetAction';
import { ROUTES } from '../../const';
import './style.css';

const Basket = () => {
  const dispatch = useDispatch();
  
  const bouquetsInBasket = useSelector(state => state.bouquets.inBasket)

  if(!Object.keys(bouquetsInBasket).length){
    return (
      <div className="infoEmptyBasket">
        <h1>Корзина пуста</h1>
        <img src="/img/грустно.png" />
      </div>
      )
  }

  let totalPrice = null;
  Object.values(bouquetsInBasket).map((element, index) => {
    return totalPrice += element.bouquet.price * element.count;
  })

  const deleteOne = (event) => {
    dispatch(deleteOneFromBasket(event.target.dataset.name));
  }

  const deleteAll = (event) => {
    dispatch(deleteAllFromBasket(event.target.dataset.name));
  }
    
  return (
    <div className="basket">
      <div className="product-container">
        <h2>КОРЗИНА</h2>
        {Object.keys(bouquetsInBasket).map((element, index) =>{
          const bouquet = bouquetsInBasket[element];
          return (
            <div>
              <div key={index} className="bouquetInBasket">
                <img alt="bouquet" src={bouquet.bouquet.picture} />
                <div className="infoBouquet">
                  <span>{bouquet.bouquet.name}</span>
                  <div>
                    {bouquet.bouquet.price + ' BYN'}
                  </div>
                  <div className="count">количество: {bouquet.count}</div>
                </div>
              </div>
              <button className="buttonDel" data-name={element} onClick={deleteAll}>Удалить</button>
              <button className="buttonDel" data-name={element} onClick={deleteOne}>Удалить 1 шт.</button>
            </div>
          )
        })}
      </div>
      <div className='container-buttons'>
        <span>ИТОГО: {totalPrice + ' BYN'}</span>
        <Link to={ROUTES.CHECKOUT} className="buttonCheakout">Oформить заказ</Link>
      </div>  
    </div>
  )
}

export default Basket;

