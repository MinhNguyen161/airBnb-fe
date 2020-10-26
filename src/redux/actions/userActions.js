import * as types from "../constants/userConstants";
import api from "../api";
import { message } from "antd";

const register = (
  name,
  email,
  password,
  location,
  language,
  avatarUrl
) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST, payload: null });
  try {
    const res = await api.post("/user", {
      name,
      email,
      password,
      location,
      language,
      avatarUrl,
    });
    dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.data });
    message.success(`Successfully create account. Nice to meet you ${name}!`);
  } catch (err) {
    dispatch({ type: types.REGISTER_SUCCESS, payload: err.message });
  }
};

export const userActions = {
  register,
};
