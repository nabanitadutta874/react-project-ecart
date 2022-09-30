import { ADD_ITEM } from '../actionTypes/actionTypes';

const initialState = {
  numOfItems: 0,
  itemList: {},
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
        itemList: state.itemList,
      };

    default:
      return state;
  }
};

export default cartReducers;
