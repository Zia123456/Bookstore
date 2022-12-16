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
    return 'loading...';
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
