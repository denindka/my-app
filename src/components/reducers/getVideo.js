
export default function video(state = [], action) {
  if (action.type === 'get_video') {
    return [ ...state,
      action.payload];
  }
  return state;
}
