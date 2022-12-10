/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Book({ title, author, genre, progress }) {
  return (
    <div className="book">
      <div>
        <span>{genre}</span>
        <h2>{title}</h2>
        <span>{author}</span>

        <div className="comments-remove-edit">
          <span>Comments</span>
          <button type="button" className="remove">
            Remove
          </button>
          <span>Edit</span>
        </div>
      </div>

      <div className="progress">
        <div className="progress-bar">
          <CircularProgressbar value={progress} text={progress} />
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
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};
