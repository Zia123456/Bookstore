import React from 'react';
import Book from '../Book';
import AddBook from '../AddNewBook';

class Books extends React.Component {
  constructor() {
    super();
    this.state = {
      booksList: [
        {
          id: 1,
          title: 'The Hunger Games',
          genres: ['Action', 'Adventure', 'Sci-Fi'],
          author: 'Suzanne Collins',
          progress: 64,
          chapter: 'Chapter 17',
        },
        {
          id: 2,
          title: 'Dune',
          genres: ['Sci-Fi', 'Fantasy'],
          author: 'Frank Herbert',
          progress: 8,
          chapter: 'Chapter 3: "A Lesson Learned"',
        },
        {
          id: 3,
          title: 'Capital in the Twenty-First Century',
          genres: ['Economics', 'Non-Fiction'],
          author: 'Suzanne Collins',
          progress: 1,
          chapter: 'Introduction',
        },
      ],
    };
  }

  render() {
    const { booksList } = this.state;
    return (
      <div className="container">
        <div className="booksContainer">
          {booksList.map((book) => (
            <Book
              key={book.id}
              title={book.title}
              author={book.author}
              genre={book.genres}
              progress={book.progress}
            />
          ))}
        </div>
        <AddBook />
      </div>
    );
  }
}

export default Books;
