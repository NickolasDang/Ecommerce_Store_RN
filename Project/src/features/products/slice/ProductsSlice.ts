import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {Product} from '../data/Product';

type ProductsState = {
  loading: boolean;
  products: Product[];
  error: String;
};
const API_URL = 'https://demo.spreecommerce.org/api/v2/storefront/products';

const initialState: ProductsState = {
  loading: false,
  products: [],
  error: '',
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get(API_URL);
    return response.data.data.map((product: any) => ({
      id: product.id,
      name: product.attributes.name,
      price: product.attributes.display_price,
      priceBefore: `$${((100 * product.attributes.price) / 120).toFixed(2)}`,
      percentOff: '20% Off',
      img: `https://picsum.photos/id/${product.id}/100/150`,
      imgCarousel: [
        {img: `https://picsum.photos/id/${product.id}/200/250`},
        {img: `https://picsum.photos/id/${product.id}/200/250`},
        {img: `https://picsum.photos/id/${product.id}/200/250`},
        {img: `https://picsum.photos/id/${product.id}/200/250`},
      ],
    }));
  },
);

export const fetchProductsByName = createAsyncThunk(
  'products/fetchProductsByName',
  async (name: string) => {
    const response = await axios.get(`${API_URL}?filter%5Bname%5D=${name}`);
    return response.data.data.map((product: any) => ({
      id: product.id,
      name: product.attributes.name,
      price: product.attributes.display_price,
      priceBefore: `$${((100 * product.attributes.price) / 120).toFixed(2)}`,
      percentOff: '20% Off',
      img: `https://picsum.photos/id/${product.id}/100/150`,
      imgCarousel: [
        {img: `https://picsum.photos/id/${product.id}/200/250`},
        {img: `https://picsum.photos/id/${product.id}/200/250`},
        {img: `https://picsum.photos/id/${product.id}/200/250`},
        {img: `https://picsum.photos/id/${product.id}/200/250`},
      ],
    }));
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.loading = false
        state.products = action.payload
        state.error = ''
      },
    );
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.products = []
      state.error = action.error.message || 'Error occured in fetching products'
    });

    builder.addCase(fetchProductsByName.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      fetchProductsByName.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.loading = false
        state.products = action.payload
        state.error = ''
      },
    );
    builder.addCase(fetchProductsByName.rejected, (state, action) => {
      state.loading = false
      state.products = []
      state.error = action.error.message || 'Error occured in fetching products by name'
    });
  },
});

export default productsSlice;
