import React from 'react';
import {useSelector} from 'react-redux';

import './style.css';




const Bouquet = () => {
  const bouquetFromStore = useSelector(state => state.bouquets.activebouquet )
  if(!bouquetFromStore){
    return null;
  }

  return (
    
    <div className="bouquet">
    <img alt="bouquet" src={bouquetFromStore.picture} />
    <span>{bouquetFromStore.price + ' BYN'}</span>
    </div>
    
  );
}

export default Bouquet;
