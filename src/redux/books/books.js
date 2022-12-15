const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

const INITIALSTATE = [
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
];

export default function bookReducer(state = INITIALSTATE, action = {}) {
  const index = state.indexOf(state.find((book) => book.id === action.id));
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.book];

    case REMOVEBOOK:
      return [...state.slice(0, index), ...state.slice(index + 1)];

    default:
      return state;
  }
}

export function createBookAction(book) {
  return {
    type: ADDBOOK,
    book,
  };
}

export function removeBookAction(id) {
  return {
    type: REMOVEBOOK,
    id,
  };
}
