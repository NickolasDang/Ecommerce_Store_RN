import {configureStore} from '@reduxjs/toolkit';
import productsSlice from '../features/products/slice/ProductsSlice';
import { authSlice } from '../features/auth/slice/authSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    auth: authSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
