import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  character: [],
};
const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setStars(state, { payload }) {
      state.character.push(payload);
    },
  },
});

const { reducer, actions } = characterSlice;
export const { setStars } = actions;

export default reducer;
