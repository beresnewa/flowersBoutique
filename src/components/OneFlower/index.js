import React from 'react';

import FlowersQty from '../FlowersQty';
import './style.css';

const OneFlower = ({flower}) => {
  return (
    <div className="flowerContainer" >
       <div className="flower">
        <span className="textName">{flower.name}</span>
        <img alt="img" src={flower.picture} className="flowerPicture" />
      </div>
      <FlowersQty name={flower.name} />
    </div> 
  );
}

export default OneFlower;