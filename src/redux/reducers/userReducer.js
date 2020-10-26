import * as types from "../constants/userConstants";

const initialState = {
  users: [],
  totalPageNum: 1,
  selectedUser: {},
  loading: false,
  message: "",
  registerUser: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_REQUEST:
      return { ...state, loading: true };

    case types.REGISTER_SUCCESS:
      return { ...state, loading: false, registerUser: payload };

    case types.REGISTER_FAILURE:
      return { ...state, loadig: false };
    default:
      return { ...state };
  }
};

export default userReducer;
