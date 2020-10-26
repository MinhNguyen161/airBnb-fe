import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import experienceReducer from "../reducers/experienceReducer";
import authReducer from "../reducers/authReducer";
import reviewReducer from "./reviewReducer";

export default combineReducers({
  user: userReducer,
  experience: experienceReducer,
  auth: authReducer,
  review: reviewReducer,
});
