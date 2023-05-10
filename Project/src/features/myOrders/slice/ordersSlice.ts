import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Order } from '../data/Order';
import { Cart } from '../../myCart/data/Cart';

type OrderState = {
    orders: Order[]
}

const initialState: OrderState = {
  orders: []
};

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

function formatDate(date: Date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-') +
    ' ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(':')
  );
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Cart>) => {
      const order: Order = {
        id: `${Math.floor(Math.random() * 100)}`,
        date: formatDate(new Date),
        orderItems: action.payload.cartItems.map(cartItem => cartItem.item)
      }
      state.orders.push(order)
    }
  }
});

export default ordersSlice;
