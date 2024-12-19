import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSliceReduser } from "./auth/authSlice";

const rootReducer = combineReducers({
  auth: authSliceReduser,
});

export const store = configureStore({
  reducer: rootReducer,
});
