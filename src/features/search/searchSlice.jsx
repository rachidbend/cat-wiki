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

export async function loader({ request }) {
  // 1- get the data from the API
  const res = await fetch(`https://api.thecatapi.com/v1/breeds`);
  const data = await res.json();

  // 2- treet the data to only get the names and ids of each breed
  const treetedData = data.map(breed => {
    const treatedBreed = {
      id: breed.id,
      name: breed.name,
    };
    return treatedBreed;
  });
  console.log(treetedData);
  return treetedData;
}

export default searchSlice.reducer;
export const { updateSearchQuery, searchoptionsLoaded } = searchSlice.actions;
