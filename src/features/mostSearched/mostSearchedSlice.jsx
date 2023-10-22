import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mostSearchedList: [
    'ragd',
    'mcoo',
    'esho',
    'pers',
    'drex',
    'bsho',
    'abys',
    'asho',
    'sfol',
    'sphy',
  ],
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

// 'ragd', 'mcoo', 'esho' , 'pers', 'drex', 'bsho', 'abys', 'asho', 'sfol', 'sphy'
