import CartActionType from "./action-types";

export const addProductToCart = (payload) => ({
  type: CartActionType.ADD_PRODUCT,
  payload: payload,
});

export const removeProductFromCart = (payload) => ({
  type: CartActionType.REMOVE_PRODUCT,
  payload: payload,
});

export const increaseProductQuantity = (payload) => ({
  type: CartActionType.INCREASE_PRODUCT_QUANTITY,
  payload: payload,
});

export const decreaseProductQuantity = (payload) => ({
  type: CartActionType.DECREASE_PRODUCT_QUANTITY,
  payload: payload,
});
