import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/auth-api';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);

      return result;
    } catch ({ response }) {
      toast.error('Oops, something went wrong, try again!');
      return rejectWithValue(response);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      toast.success(`Welcome ${result.user.name}!`)
      return result;
      
      
    } catch ({ response }) {
      toast.error('Check the correctness of the entered data!')
      return rejectWithValue(response);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {auth} = getState();
      const data = await api.getCurrent(auth.token);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, {getState}) => {
      const {auth} = getState();
      if(!auth.token) {
        return false;
      }
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

