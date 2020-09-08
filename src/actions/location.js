
export const GET_LOCATION = 'GET_LOCATION';

export const getLocation = (location) => ({ type: GET_LOCATION, location });

export const logLocation = (location) => {
  return (dispatch) => {
    dispatch(getLocation(location))
  }
}