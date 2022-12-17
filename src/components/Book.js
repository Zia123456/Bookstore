/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook } from '../redux/books/bookSlice';

function Book({ id, book }) {
  const dispatch = useDispatch();
  const percentage = 65;

  return (
    <div className="book">
      <div className="book-details-container">
        <div className="book-details">
          <span className="category">{book.category}</span>
          <h2 className="title">{book.title}</h2>
          <span className="author">{book.author}</span>
        </div>
        <div className="comments-remove-edit">
          <span className="comments">Comments</span>
          <div className="vertical"></div>
          <button
            onClick={() => dispatch(removeBook(id))}
            type="button"
            className="remove"
          >
            Remove
          </button>
          <div className="vertical"></div>
          <span>Edit</span>
        </div>
      </div>

      <div className="progress">
        <div className="progress-bar">
          <CircularProgressbar
            className="circular-progress"
            value={percentage}
          />
          <div className="completed">
            <span className="percentage">{percentage}%</span>
            <span className="completed-text">Completed</span>
          </div>
        </div>
        <div className="long-vertical"></div>
        <div className="progress-details">
          <span className="current-chapter">CURRENT CHAPTER</span>
          <span className="introduction">Introduction</span>
          <button type="button" className="update-progress">
            UPDATE PROGRESS
          </button>
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
