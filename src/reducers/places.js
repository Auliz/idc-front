import { GET_PLACES } from '../actions/places';

const initialState = [];

export default function placesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLACES:
      return action.places;
    default:
      return state;
  }
}
