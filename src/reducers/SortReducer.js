import {createSlice} from "@reduxjs/toolkit";

const SortReducer = createSlice({
    name: "SortReducer",
    initialState: {
        isSelected: ""
    },
    reducers: {
        getSortValue: (state, action) => {
            const {selected} = action.payload
            state.isSelected = selected
            console.log(state.isSelected)
        }
    }
})


export const {getSortValue} = SortReducer.actions
export default SortReducer.reducer