import { createSlice } from "@reduxjs/toolkit";
import juices from "../../data/Juices/juices";

const initialState = {
    juices: juices,
    selectedJuice: null,
}

const juicesSlice = createSlice({
    name: 'juices',
    initialState,
    reducers: {
        setSelectJuice: ( state, actions ) => {
            const juiceId = actions.payload;

            state.selectedJuice = state.juices.find( (j) => j.id === juiceId )
        }
    },
});

export default juicesSlice;