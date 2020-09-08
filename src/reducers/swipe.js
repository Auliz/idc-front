import { POST_SWIPE } from '../actions/places';

const initialState = null;

export default function placesReducer(state = initialState, action) {
  switch (action.type) {
    case POST_SWIPE:
      return action.rest;
    default:
      return state;
  }
}
