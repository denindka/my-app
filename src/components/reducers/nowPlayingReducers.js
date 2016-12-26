export default function nowPlaying(state = [], action) {
  if (action.type === 'get_now_playing') {
    return [ ...state,
      action.payload];
  }
  return state;
}
