import { createSlice } from "@reduxjs/toolkit";
import categoriesData from "../../data/Categories/categoriesData";

const initialState = {
    categories: categoriesData,
    selectedCategorie: null,
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setSelectedCategorie: ( state, actions ) => {
            const categorieId = actions.payload;

            state.selectedCategorie = state.categories.find( (c) => c.id === categorieId )
        }
    },
});

export default categoriesSlice;