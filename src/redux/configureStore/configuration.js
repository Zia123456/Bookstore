import { configureStore } from '@reduxjs/toolkit';
// import bookReducer from '../books/books';
import books from '../books/bookSlice';
import categoriesReducer from '../categories/categories';

const store = configureStore({
  reducer: {
    books,
    categoriesReducer,
  },
});

export default store;
