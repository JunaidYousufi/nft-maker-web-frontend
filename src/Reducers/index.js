import { combineReducers } from "redux";

// -------These reducer files will be created in Reducers folder then will be imported here
import LoginFormMethod from "./LoginFormMethod";

// Here all reducers will get combined
export default combineReducers({
  LoginFormMethod: LoginFormMethod,
});
