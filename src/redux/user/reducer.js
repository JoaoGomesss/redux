import UserActionTypes from "./action-types";

const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      break;

    case UserActionTypes.LOGOUT:
      break;
    default:
      return state;
  }
};

export default userReducer;
