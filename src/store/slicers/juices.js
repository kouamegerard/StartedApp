import { createSlice } from "@reduxjs/toolkit";
import juicesData from "../../data/Juices/juicesData";

const initialState = {
    juices: juicesData,
    selectedJuice: null,
}

const juicesSlice = createSlice({
    name: 'juices',
    initialState,
    reducers: {
        setSelectJuice: ( state, actions ) => {
            const juiceId = actions.payload;

            state.selectedJuice = state.juices.find( (p) => p.id === juiceId )
        }
    },
});

export default juicesSlice;