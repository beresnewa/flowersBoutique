import { combineReducers } from 'redux';

import FlowersQtyReducer from  './FlowersQtyReducer';
import BouquetReducer from './BouquetReducer';
import CheckoutReducer from './CheckoutReducer';

export default combineReducers({
  flowers: FlowersQtyReducer,
  bouquets: BouquetReducer,
  checkout: CheckoutReducer
});