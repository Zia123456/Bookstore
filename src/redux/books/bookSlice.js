import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// l1GhZWJlzwXPvstUE1qb

const initialState = [];

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rI67Xft5flkWH9EgB2n8/books',
  );
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  await axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rI67Xft5flkWH9EgB2n8/books',
    book,
  );

  const response = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rI67Xft5flkWH9EgB2n8/books',
  );
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rI67Xft5flkWH9EgB2n8/books/${id}`,
  );

  const response = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rI67Xft5flkWH9EgB2n8/books',
  );
  return response.data;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.push(action.payload);
    });

    builder.addCase(addBook.fulfilled, (state, action) => {
      state.splice(0, state.length);
      state.push(action.payload);
    });

    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.splice(0, state.length);
      state.push(action.payload);
    });
  },
});

export default bookSlice.reducer;
