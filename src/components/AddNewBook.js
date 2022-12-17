/* eslint-disable no-alert */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, getBooks } from '../redux/books/bookSlice';

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
    <div className="add-book">
      <hr className="hr-line" />
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          onChange={onChange}
          type="text"
          className="title-input"
          value={title}
          name="title"
          placeholder="title"
        />
        <input
          onChange={onChange}
          value={author}
          name="author"
          type="text"
          className="author-input"
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
        <button type="submit" className="add-book-button">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default AddBook;
