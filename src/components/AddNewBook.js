/* eslint-disable no-alert */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createBookAction } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setAuthor(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() || author.trim()) {
      dispatch(
        createBookAction({
          id: uuidv4(),
          title,
          author,
          genres: 'Sci-FiFantasy',
          progress: 0,
        }),
      );
    } else {
      alert('Please write the content');
    }

    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        onChange={onChange}
        type="text"
        className="title"
        value={title}
        name="title"
        placeholder="title"
      />
      <input
        onChange={onChange}
        value={author}
        name="author"
        type="text"
        className="author"
        placeholder="author"
      />
      <button type="submit"> ADD BOOK</button>
    </form>
  );
}

export default AddBook;
