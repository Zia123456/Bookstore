import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBookAction } from '../redux/books/books';

function Book(props) {
  const dispatch = useDispatch();
  const { book } = props;

  return (
    <div className="book">
      <div>
        <span>{book.genres}</span>
        <h2>{book.title}</h2>
        <span>{book.author}</span>

        <div className="comments-remove-edit">
          <span>Comments</span>
          <button
            onClick={() => dispatch(removeBookAction(book.id))}
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

export default Book;
Book.propTypes = {
  book: PropTypes.string.isRequired,
};
