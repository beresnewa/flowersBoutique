import React from 'react';
import {useSelector, useDispatch} from 'react-redux';


import './style.css';
import {plusAction, minusAction} from '../../actions/FlowersQtyAction';


const FlowersQty = ({name}) => {
  const dispatch = useDispatch();
  const countFromStore = useSelector(state => state.flowers.flowers[name].count )
  
  const onClickPlus = () => {
    dispatch(plusAction(name));
  }
  
  const onClickMinus = () => {
    dispatch(minusAction(name));
  }

  return (
      <div className="flowersQty">
      <button className="buttonQty" onClick={onClickMinus} disabled={countFromStore ? false : true}>-</button>
      {countFromStore}
      <button className="buttonQty" onClick={onClickPlus}>+</button>
    </div> 
  )
}

export default FlowersQty;
