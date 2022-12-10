/* eslint-disable react/no-unused-state */
import React from 'react';

class AddBook extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
    };
  }

  render() {
    return (
      <form className="form-container">
        <input type="text" className="title" placeholder="title" />
        <input type="text" className="author" placeholder="author" />
        <button type="button"> ADD BOOK</button>
      </form>
    );
  }
}

export default AddBook;
