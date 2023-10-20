import { configureStore } from '@reduxjs/toolkit';
import breedReducer from './features/detailsPage/detailsSlice';
import searchReducer from './features/search/searchSlice';
import mostSearchedReducer from './features/mostSearched/mostSearchedSlice';

const store = configureStore({
  reducer: {
    breed: breedReducer,
    search: searchReducer,
    mostSearched: mostSearchedReducer,
  },
});

export default store;
