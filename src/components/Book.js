import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import { removeBookAction } from '../redux/books/books';
import { removeBook } from '../redux/books/bookSlice';

function Book({ id, book }) {
  const dispatch = useDispatch();

  return (
    <div className="book">
      <div>
        <span>{book.category}</span>
        <h2>{book.title}</h2>
        <span>{book.author}</span>

        <div className="comments-remove-edit">
          <span>Comments</span>
          <button
            onClick={() => dispatch(removeBook(id))}
            type="button"
            className="remove"
          >
            Remove
          </button>
          <span>Edit</span>
        </div>
      </div>

      <div className="progress">
        <div className="progress-bar">
          <CircularProgressbar value={book.progress} text={book.progress} />
        </div>
        <div className="progress-details">
          <span>CURRENT CHAPTER</span>
          <span>Introduction</span>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
