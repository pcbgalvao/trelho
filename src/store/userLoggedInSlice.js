import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";
import userApi from "../data/userData";

const fetchUser = createAsyncThunk("user/get", async (userLogin) => {
  const url = `/user/get/${userLogin}`;
  const response = await userApi.get(url);

  const payload = response.data.reduce(
    (accu, country) => ({
      ...accu,
      [country.name]: { ...country, checked: false },
    }),
    {}
  );
  return payload;
});

export const userLoggedIn = createSlice({
  name: "userLoggedIn",
  initialState: {
    isUserLoggedIn: false,
    fullname: "",
    login: "",
    email: "",
    password: "",
  },
  reducers: {},
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const selectIsUserLoggedIn = (state) =>state.userLoggedIn.isUserLoggedIn;
export const selectFullname = (state) =>state.userLoggedIn.fullname;
export const selectLogin = (state) => state.userLoggedIn.login;
export const selectEmail = (state) => state.userLoggedIn.email;
export const selectPassword = (state) => state.userLoggedIn.password;

export default userLoggedIn.reducer;
