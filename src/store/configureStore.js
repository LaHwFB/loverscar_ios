import { createStore,combineReducers } from 'redux';

import carsReducer from './reducers/cars';

const rootReducer = combineReducers({
  cars: carsReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
