import {
  INCREMENT_REQUEST,
  DECREMENT_REQUEST,
  MULTI_REQUEST,
  RESET_REQUEST,
  TEXT_REQUEST,
  INPUT_REQUEST
} from "./actionTypes";

//increaseAction
export const increaseAction = number => {
  return {
    type: INCREMENT_REQUEST,
    payload: number
  };
};

//decreaseAction
export const decreaseAction = number => {
  return {
    type: DECREMENT_REQUEST,
    payload: number
  };
};

//multiAction
export const multiAction = number => {
  return {
    type: MULTI_REQUEST,
    payload: number
  };
};

//resetAction
export const resetAction = number => {
  return {
    type: RESET_REQUEST,
    payload: number
  };
};

//textAction
export const textAction = text => {
  return {
    type: TEXT_REQUEST,
    payload: text
  };
};

//inputAction
export const inputAction = (num1,num2) => {
  return {
    type: INPUT_REQUEST,
    payload: {num1,num2},
  };
};

