import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    selectedProduct: null,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectProduct: ( state, actions ) => {
            const productId = actions.payload;

            state.selectedProduct = state.products.find( (p) => p.id === productId )
        }
    },
});

export default productsSlice;