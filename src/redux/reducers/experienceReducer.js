import * as types from "../constants/experienceConstants";

let initialState = {
  experiences: [],
  totalPageNum: 1,
  selectedExp: null,
  loading: false,
  message: String,
};

const experienceReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_EXPERIENCES_REQUEST &&
      types.GET_DETAIL_REQUEST &&
      types.CREATE_EXPERIENCE_REQUEST:
      return { ...state, loading: true };

    case types.GET_EXPERIENCES_SUCCESS:
      return {
        ...state,
        loading: false,
        experiences: payload.exps,
        totalPageNum: payload.totalPages,
      };

    case types.GET_DETAIL_SUCCESS:
      return { ...state, loading: false, selectedExp: payload };

    case types.CREATE_EXPERIENCE_SUCCESS:
      return { ...state, loading: false };
    case types.GET_EXPERIENCES_FAILURE &&
      types.GET_DETAIL_FAILURE &&
      types.CREATE_EXPERIENCE_FAILURE:
      return { ...state, loading: false };

    default:
      return { ...state };
  }
};

export default experienceReducer;
