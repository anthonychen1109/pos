import { ADD_MENU } from '../actions/index';

const initialState = {
  items: []
}

export default function(state=initialState, action) {
  switch(action.type) {
    case ADD_MENU:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}
