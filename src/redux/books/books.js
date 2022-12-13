const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

const INITIALSTATE = [];

export default function bookReducer(state = INITIALSTATE, action = {}) {
  const index = state.indexOf(state.find((book) => book.id === action.id));
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.book];

    case REMOVEBOOK:
      return [...state.slice(0, index, ...state.slice(index + 1))];

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
