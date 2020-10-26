import * as types from "../constants/experienceConstants";
import api from "../api";
import { message } from "antd";

const getExperiences = (activePage, limit = 10) => async (dispatch) => {
  dispatch({ type: types.GET_EXPERIENCES_REQUEST, payload: null });
  try {
    const res = await api.get(`/exp?page=${activePage}&limit=${limit}`);
    dispatch({ type: types.GET_EXPERIENCES_SUCCESS, payload: res.data.data });
    console.log("list exp", res.data.data);
  } catch (err) {
    dispatch({ type: types.GET_EXPERIENCES_FAILURE, payload: err.message });
    console.log(err.message);
  }
};

const createExperience = (
  title,
  country,
  price,
  duration,
  whatToBring,
  content,
  author,
  pictureUrl
) => async (dispatch) => {
  dispatch({ type: types.CREATE_EXPERIENCE_REQUEST, payload: null });
  try {
    const res = await api.post(`/exp`, {
      title,
      country,
      price,
      duration,
      whatToBring,
      content,
      author,
      pictureUrl,
    });
    dispatch({
      type: types.CREATE_EXPERIENCE_SUCCESS,
      payload: res.data.data,
    });
    console.log("detail", res.data.data);
    message.success("Successfully create event");
  } catch (err) {
    dispatch({
      type: types.CREATE_EXPERIENCE_FAILURE,
      payload: err.message,
    });
    console.log(err.message);
  }
};

const editExperience = (
  id,
  title,
  country,
  price,
  duration,
  whatToBring,
  content,
  pictureUrl
) => async (dispatch) => {
  dispatch({ type: types.EDIT_EXPERIENCE_REQUEST, payload: null });
  try {
    const res = await api.put(`/exp/${id}`, {
      title,
      country,
      price,
      duration,
      whatToBring,
      content,
      pictureUrl,
    });
    dispatch({
      type: types.EDIT_EXPERIENCE_SUCCESS,
      payload: res.data.data,
    });
    console.log("detail", res.data.data);
    message.success("Successfully update event");
  } catch (err) {
    dispatch({
      type: types.EDIT_EXPERIENCE_FAILURE,
      payload: err.message,
    });
    console.log(err.message);
  }
};

const getDetail = (id) => async (dispatch) => {
  dispatch({ type: types.GET_DETAIL_REQUEST, payload: null });
  try {
    const res = await api.get(`/exp/${id}`);
    dispatch({
      type: types.GET_DETAIL_SUCCESS,
      payload: res.data.data,
    });
    console.log("detail", res.data.data);
  } catch (err) {
    dispatch({
      type: types.GET_DETAIL_FAILURE,
      payload: err.message,
    });
    console.log(err.message);
  }
};

export const experienceActions = {
  getExperiences,
  createExperience,
  getDetail,
  editExperience,
};
