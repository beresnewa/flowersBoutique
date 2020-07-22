import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';

import OneFlower from '../OneFlower';
import Bouquet from '../Bouquet';
import './style.css';
import bouquets from '../../bouquets';
import {setBouquet, putInBasket} from  '../../actions/BouquetAction';
import {clearAction} from '../../actions/FlowersQtyAction';




const FlowersList = () => {

  const dispatch = useDispatch();
  const bouquetFromStore = useSelector(state => state.bouquets.activebouquet )
  const flowers = useSelector(state => state.flowers.flowers);

  const flowersNames = Object.keys(flowers)
  const bouquetNames = Object.keys(bouquets);
  const bouquet = bouquetNames.map(element=> bouquets[element])
  
  
  const findBouquet = () => {
    
    let stringForFindBouquet = '' ;
    flowersNames.forEach(element => {
      if(flowers[element].count > 0){
        return (stringForFindBouquet = stringForFindBouquet + flowers[element].id + ':' + flowers[element].count + ',') ;
      }
      
    });
    
    let bouquetFound = false;
    bouquet.forEach(oneBouquet => {
      if (stringForFindBouquet === oneBouquet.code) {
        dispatch(setBouquet(oneBouquet));
        bouquetFound = true;
      } 
    })
    if(!bouquetFound) {
      dispatch(setBouquet(null));
    }
  }

  const cleanBouquet = () =>{
    dispatch(setBouquet(null));
    dispatch(clearAction())
  }

  const sendToBasket = () => {
    dispatch(putInBasket());
    swal("Букет добавлен в корзину");
  }

  return (
    
    <div className="containerFlowerList">
      
        <div className="flowersList">
          <div className="flowersImages">
            {flowersNames.map(element => (
              <OneFlower
                key={flowers[element].id}
                flower={flowers[element]}
              />
            ))}
          </div>
          <div className="buttonsFlex">
            <button className= "buttonFind" onClick={findBouquet}>Поиск букета</button>
            <button className= "buttonTrash" onClick={cleanBouquet}><img alt="trash" src="/img/icons8-мусор.svg" /></button>
          </div>
          <textarea className="commentTable" placeholder="Комментарий к заказу" />
          <button className="sendToBasket" onClick={sendToBasket} disabled={bouquetFromStore ? false : true }>В корзину</button>
          <Bouquet />
        </div>
    </div>
    
  );


}

export default FlowersList;
