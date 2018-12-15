import { SELECT_CAR, RENT_CAR, SET_NOTIF, UNSET_NOTIF, DESELECT_CAR } from '../actions/actionTypes';

const initialState = {
  cars : []
};

const reducer = (state = initialState , action) => {
  switch (action.type) {
    case SELECT_CAR:
    return {
        ...state,
        selectedCar: state.cars.find(car =>{
          return car.key === key
        })
    };
    case DESELECT_CAR:
    return {
      ...state,

    };
    case RENT_CAR:
    return {
      ...state,

    };
    case SET_NOTIF:
    return {
      ...state,

    };
    case UNSET_NOTIF:
    return {
      ...state,

    };


    default:
      return state;
  }
};

export default reducer;
