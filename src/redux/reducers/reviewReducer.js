import * as types from "../constants/reviewConstant";

let initialState = {
  reviewList: [],
  singleReview: {},
  loading: false,
  totalPages: 1,
  message: "",
};

const reviewReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_REVIEW_REQUEST && types.CREATE_REVIEW_REQUEST:
      return { ...state, loading: true };

    case types.GET_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        reviewList: payload.reviews,
        totalPages: payload.totalPages,
      };

    case types.CREATE_REVIEW_SUCCESS:
      return { ...state, loading: false, singleReview: payload };

    case types.GET_REVIEW_FAILURE && types.GET_REVIEW_FAILURE:
      return { ...state, loading: false };

    default:
      return { ...state };
  }
};

export default reviewReducer;
