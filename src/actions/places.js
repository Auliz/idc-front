export const GET_PLACES = 'GET_PLACES';

export const getPlaces = (places) => ({ type: GET_PLACES, places });

export const logPlaces = (places) => {
  return (dispatch) => {
    dispatch(getPlaces(places))
  }
}