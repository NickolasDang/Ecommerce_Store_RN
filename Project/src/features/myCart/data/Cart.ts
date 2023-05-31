import {CartItem} from './CartItem';

export interface Cart {
  cartItems: CartItem[];
  price: string;
  deliveryPrice: string;
  discount: string;
  tax: string;
  payableAmount: string;
}
