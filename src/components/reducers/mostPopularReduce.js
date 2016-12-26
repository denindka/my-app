
export default function popular(state = [], action) {
  if (action.type === 'get_most_popular') {
    return [ ...state,
      action.payload];
  }
  return state;
}
