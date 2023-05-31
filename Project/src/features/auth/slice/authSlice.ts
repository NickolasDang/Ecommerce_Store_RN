import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isLogged: false,
  erorr: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loading: state => {
      state.loading = true 
      state.isLogged = false
      state.erorr = false
    },
    showError: state => {
      state.loading = false 
      state.isLogged = false
      state.erorr = true
    },
    login: state => {
      state.loading = false 
      state.isLogged = true
      state.erorr = false
    },
    logout: state => {
      state.loading = false 
      state.isLogged = false
      state.erorr = false
    },
  },
});
