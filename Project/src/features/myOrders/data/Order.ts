import {Product} from '../../products/data/Product';

export type Order = {
  id: String;
  date: string;
  orderItems: Product[];
};
