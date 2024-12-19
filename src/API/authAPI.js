import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastError, toastSuccess } from "../services/toastNotification";

axios.defaults.baseURL = "https://vocab-builder-backend.p.goit.global/api/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

export const signUpAPI = createAsyncThunk(
  "auth/signUpAPI",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", credentials.data);
      if (res.status === 201) {
        setAuthHeader(res.data.token);
        toastSuccess("You have successfully registered.");
        return res.data;
      } else {
        throw new Error();
      }
    } catch (error) {
      const message = error.response?.data?.message;
      toastError(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const signInAPI = createAsyncThunk(
  "auth/signInAPI",
  async (credentials) => {
    try {
      const res = await axios.post("/users/signin", credentials.data);

      if (res.status === 200) {
        setAuthHeader(res.data.token);
        toastSuccess("You have successfully logined.");
        return res.data;
      } else {
        throw new Error();
      }
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Something went wrong, please try again.";
      toastError(message);
      throw new Error(message);
    }
  }
);

export const logOutAPI = createAsyncThunk(
  "auth/signout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/users/signout");
      clearAuthHeader();
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Something went wrong, please try again.";
      toastError(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
