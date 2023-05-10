import {configureStore} from '@reduxjs/toolkit';
import productsSlice from '../features/products/slice/ProductsSlice';
import { authSlice } from '../features/auth/slice/authSlice';
import ordersSlice from '../features/myOrders/slice/ordersSlice';
import cartSlice from '../features/myCart/slice/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    auth: authSlice.reducer,
    orders: ordersSlice.reducer,
    cart: cartSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
