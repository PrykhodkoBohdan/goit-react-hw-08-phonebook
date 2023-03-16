import { createSlice } from '@reduxjs/toolkit';
import { signup, login, current, logout } from './auth-operations';
const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
    .addCase(signup.pending, (state) => {
      state.loading = true;
      state.error = null;
      console.log(state.token)
    })
    .addCase(signup.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
      console.log(state.token)
    })
    .addCase(signup.rejected, (state, {payload}) => {
      state.isLogin = false;
      state.error = payload;
      console.log(state.token)
    })
    .addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(login.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    })
    .addCase(login.rejected, (state, {payload}) => {
      state.isLogin = false;
      state.error = payload;
    })
    .addCase(current.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(current.fulfilled, (state, {payload}) => {
      const {name, email} = payload;
      state.loading = false;
      state.user.name = name;
      state.user.email = email;
      state.isLogin = true;
    })
    .addCase(current.rejected, (state, {payload}) => {
      state.isLogin = false;
      state.token = "";
      state.error = payload;
    })
    .addCase(logout.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(logout.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.user = {};
      state.token = "";
      state.isLogin = false;
    })
    .addCase(logout.rejected, (state, {payload}) => {
      state.isLogin = true;
      state.error = payload;
    })
  },
});

export default authSlice.reducer;
