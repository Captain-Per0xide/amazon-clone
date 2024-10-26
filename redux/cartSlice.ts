import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

interface CartState {
    items: any[];
}

const initialState: CartState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            state.items.push(action.payload);
        }
    }
});

export const { addToCart } = cartSlice.actions;
export const getCart = (state: RootState) => state.cart.items;
export default cartSlice.reducer;
