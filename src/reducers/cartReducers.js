import { ADD_ITEM } from '../actionTypes/actionTypes';

const initialState = {
  numOfItems: 0,
  itemList: [],
};

export const cartReducers = (state = initialState, action) => {
  const { type, product } = action;
  switch (type) {
    case ADD_ITEM:
      console.log(product,state)
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
        itemList: state.itemList.push(product),
      };

    default:
      return state;
  }
};
