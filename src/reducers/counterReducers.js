import {
  INCREMENT_SUCCESSED,
  DECREMENT_SUCCESSED,
  MULTI_SUCCEED,
  RESET_SUCCEED,
  TEXT_SUCCEED,
  INPUT_SUCCEED
} from "../action/actionTypes";

const counterReducers = (times = 0, action) => {
  switch (action.type) {
    case INCREMENT_SUCCESSED:
      return action.payload;
    case DECREMENT_SUCCESSED:
      return action.payload;
    case MULTI_SUCCEED:
      return action.payload;
    case RESET_SUCCEED:
      return action.payload;
    case TEXT_SUCCEED:
      return action.payload;
    case INPUT_SUCCEED:
      return action.payload;
    default:
      return times;
  }
};

export default counterReducers;
