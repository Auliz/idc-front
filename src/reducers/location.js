import { GET_LOCATION } from '../actions/location'

const initialState = {};

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATION:
      return action.location;
    default:
      return state;
  }
}