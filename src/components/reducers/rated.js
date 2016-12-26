
export default function rated(state = [], action) {
  if (action.type === 'new_data_movie') {
    return [ ...state,
      action.payload];
  }
  return state;
}
