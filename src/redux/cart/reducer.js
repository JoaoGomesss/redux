import CartActionType from "./action-types";

const initialState = {
  products: [],
  productsTotalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionType.ADD_PRODUCT:
      break;

    case CartActionType.REMOVE_PRODUCT:
      break;
    case CartActionType.INCREASE_PRODUCT_QUANTITY:
      break;

    case CartActionType.DECREASE_PRODUCT_QUANTITY:
      break;
    default:
      return state;
  }
};

export default cartReducer;
