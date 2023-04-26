import {configureStore} from '@reduxjs/toolkit';
import productsSlice from '../features/products/slice/ProductsSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
