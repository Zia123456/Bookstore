import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Book';
import AddBook from '../AddNewBook';

const Books = () => {
  const booksList = useSelector((state) => state.bookReducer);
  return (
    <div className="container">
      <div className="booksContainer">
        {booksList.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
