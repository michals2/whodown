import { combineReducers } from "redux";
import nav from "./navReducer";

const todoApp = combineReducers({
  nav
});

export default todoApp;
