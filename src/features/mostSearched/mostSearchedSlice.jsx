import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mostSearchedBreeds: [],
};

const mostSearchedSlice = createSlice({
  name: 'mostSearched',
  initialState,
  reducers: {
    mostSearchedLoaded: (state, action) => {
      state.mostSearchedBreeds = action.payload;
    },
  },
});

export default mostSearchedSlice.reducer;
export const { mostSearchedLoaded } = mostSearchedSlice.actions;
