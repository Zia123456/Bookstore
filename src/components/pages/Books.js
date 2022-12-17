/* eslint-disable react/self-closing-comp */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../Book';
import AddBook from '../AddNewBook';
import { getBooks } from '../../redux/books/bookSlice';

const Books = () => {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (booksList.length === 0) {
    return (
      <div className="loading-container">
        <div className="circle"></div>
        <h1 className="loading">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="booksContainer">
        {Object.entries(booksList[0]).map(([k, v]) => (
          <Book key={k} book={v[0]} id={k} />
        ))}
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
