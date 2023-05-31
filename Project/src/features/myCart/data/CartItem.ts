import {Product} from '../../products/data/Product';

export interface CartItem {
  id: string;
  item: Product;
  amount: number;
}
