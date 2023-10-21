import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  breedDetails: {},
  breedImage: '',
  otherBreedImages: [],
};

const breedSlice = createSlice({
  name: 'breed',
  initialState,
  reducers: {
    breedDetailsLoaded: (state, action) => {
      state.breedDetails = action.payload;
    },
    otherImagesLoaded: (state, action) => {
      state.otherBreedImages = action.payload;
    },
    breedImageLoaded: (state, action) => {
      state.breedImage = action.payload;
    },
  },
});

export default breedSlice.reducer;
export const { breedDetailsLoaded, otherImagesLoaded, breedImageLoaded } =
  breedSlice.actions;
