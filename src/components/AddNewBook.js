/* eslint-disable no-alert */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, getBooks } from '../redux/books/bookSlice';
// import { createBookAction } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setcategory] = useState('');

  const onChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else if (e.target.name === 'author') {
      setAuthor(e.target.value);
    } else {
      setcategory(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() || author.trim() || category.trim()) {
      dispatch(
        addBook({
          item_id: uuidv4(),
          title,
          author,
          category,
        }),
      );
    } else {
      alert('Please write the content');
    }

    setTitle('');
    setAuthor('');
    setcategory('');
    dispatch(getBooks);
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
      <input
        onChange={onChange}
        value={category}
        name="genres"
        type="text"
        className="genres"
        placeholder="category"
      />
      <button type="submit"> ADD BOOK</button>
    </form>
  );
}

export default AddBook;
