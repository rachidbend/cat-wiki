import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  searchOptions: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    searchoptionsLoaded: (state, action) => {
      state.searchOptions = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { updateSearchQuery, searchoptionsLoaded } = searchSlice.actions;
