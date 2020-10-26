import * as types from "../constants/authConstants";
import api from "../api";
import { message } from "antd";

const login = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.post("auth/login", { email, password });
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.data });
    message.success(`Welcome back ${res.data.data.user.name}`);
  } catch (err) {
    dispatch({ type: types.LOGIN_FAILURE, payload: err.message });
  }
};

const getCurrentUser = (accessToken) => async (dispatch) => {
  dispatch({ type: types.GET_CURRENT_USER_REQUEST, payload: null });
  if (accessToken) {
    const bearerToken = "Bearer " + accessToken;
    api.defaults.headers.common["authorization"] = bearerToken;
  }
  try {
    const res = await api.get("/user");
    dispatch({ type: types.GET_CURRENT_USER_SUCCESS, payload: res.data.data });
    console.log("crr user ne", res.data.data);
  } catch (error) {
    dispatch({ type: types.GET_CURRENT_USER_FAILURE, payload: error });
  }
};

export const authActions = {
  login,
  getCurrentUser,
};
