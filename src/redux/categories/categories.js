const STATUS = 'UNDER CONSTRUCTION';
const INITIALSTATE = [];

export default function categoriesReducer(state = INITIALSTATE, action = {}) {
  switch (action.type) {
    case STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}
