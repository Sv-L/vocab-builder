import { createSlice } from "@reduxjs/toolkit";
import { logOutAPI, signInAPI, signUpAPI } from "../../API/authAPI";

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  message: "",
  isLoggedIn: false,
  authIsLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUpAPI.pending, (state) => {
        state.authIsLoading = true;
      })
      .addCase(signUpAPI.fulfilled, (state, action) => {
        const { name, email, token } = action.payload;
        state.authIsLoading = false;
        state.isLoggedIn = true;
        state.message = "You have successfully registered.";
        state.user = { name, email };
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(signUpAPI.rejected, (state, action) => {
        state.authIsLoading = false;
        state.message = action.error.message;
      })
      .addCase(signInAPI.pending, (state) => {
        state.authIsLoading = true;
        state.token = "";
      })
      .addCase(signInAPI.fulfilled, (state, action) => {
        const { name, email, token } = action.payload;
        state.authIsLoading = false;
        state.message = "You have successfully logined.";
        state.user = { name, email };
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(signInAPI.rejected, (state) => {
        state.authIsLoading = false;
      })
      .addCase(logOutAPI.pending, (state) => {
        state.authIsLoading = true;
      })
      .addCase(logOutAPI.fulfilled, (state) => {
        state.authIsLoading = false;
        state.user = { ...initialState.user };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOutAPI.rejected, (state) => {
        state.authIsLoading = false;
      });
  },
});

export const authSliceReduser = authSlice.reducer;
