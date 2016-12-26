
export default function upcaming(state = [], action) {
  if (action.type === 'get_upcaming') {
    return [ ...state,
      action.payload];
  }
  return state;
}
