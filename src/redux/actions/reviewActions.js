import * as types from "../constants/reviewConstant";
import api from "../api";
import { message } from "antd";

const getAllReviews = (id, activePage, limit = 10) => async (dispatch) => {
  dispatch({ type: types.GET_REVIEW_REQUEST, payload: null });
  try {
    const res = await api.get(
      `review/getall/${id}?page=${activePage}&limit=${limit}`
    );
    dispatch({ type: types.GET_REVIEW_SUCCESS, payload: res.data.data });
  } catch (err) {
    dispatch({ type: types.GET_REVIEW_FAILURE, payload: err.message });
  }
};

const createReview = (id, content, rating) => async (dispatch) => {
  dispatch({ type: types.CREATE_REVIEW_REQUEST, payload: null });
  try {
    const res = await api.post(`review/${id}`, { content, rating });
    dispatch({ type: types.CREATE_REVIEW_SUCCESS, payload: res.data.data });
    message.success("Create review successful");
  } catch (err) {
    dispatch({ type: types.CREATE_REVIEW_FAILURE, payload: err.message });
    message.error(err.message);
  }
};

export const reviewActions = {
  getAllReviews,
  createReview,
};
