import { combineReducers } from "redux";
import authReducer from "./authReducer";
import annReducer from "./annReducer"
import profileReducer from "./profileReducer";

export default combineReducers({
  authReducer,annReducer,profileReducer,
  
});