import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Cart} from '../data/Cart';
import {CartItem} from '../data/CartItem';
import ordersSlice from '../../myOrders/slice/ordersSlice';

type CartState = {
  cart: Cart;
};

const initialState: CartState = {
  cart: {
    cartItems: [],
    price: '',
    deliveryPrice: '$1',
    discount: '',
    tax: '$1',
    payableAmount: '',
  },
};

const getNumber = (str: String, sub: number = 1) => {
  return Number(str.substring(sub));
};

const calculatePrice = (cartItems: CartItem[]) => {
  let price: number = 0;
  cartItems.forEach(cartItem => {
    price += getNumber(cartItem.item.price) * cartItem.amount;
  });
  return `$${price}`;
};

const calculateDiscount = (cartItems: CartItem[]) => {
  let discount: number = 0;
  cartItems.forEach(cartItem => {
    discount +=
      (getNumber(cartItem.item.price) - getNumber(cartItem.item.priceBefore)) *
      cartItem.amount;
  });
  return `-$${discount}`;
};

const updateCart = (cart: Cart) => {
  cart.price = calculatePrice(cart.cartItems);
  cart.discount = calculateDiscount(cart.cartItems);
  cart.payableAmount = `$${
    getNumber(cart.price) - getNumber(cart.discount, 2)
  }`;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cart.cartItems.push(action.payload);
      updateCart(state.cart);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart.cartItems = state.cart.cartItems.filter(
        item => item.id !== action.payload,
      );
      updateCart(state.cart);
    },
    clearCart: state => {
      state.cart = {
        cartItems: [],
        price: '',
        deliveryPrice: '$1',
        discount: '',
        tax: '$1',
        payableAmount: '',
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(ordersSlice.actions.addOrder, state => {
      state.cart = {
        cartItems: [],
        price: '',
        deliveryPrice: '$1',
        discount: '',
        tax: '$1',
        payableAmount: '',
      };
    });
  },
});

export default cartSlice;
