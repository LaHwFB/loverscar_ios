import { SELECT_CAR,ENT_CAR, SET_NOTIF, UNSET_NOTIF, DESELECT_CAR } from './actionTypes';

export const select_car = (key) => {
  return {
    type : SELECT_CAR,

  };
};

export const deselect_car = (key) => {
  return {
    type : DESELECT_CAR,

  };
};


export const rent_car = () => {
  return {
    type : RENT_CAR,

  };
};

export const set_notif = () => { // we won't need key already inside object
  return {
    type: SET_NOTIF,

  };

  export const unset_notif = () => { // we won't need key already inside object
    return {
      type: UNSET_NOTIF,

    };
};
