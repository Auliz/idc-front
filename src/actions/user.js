// ACTION TYPES

export const GET_USER = 'GET_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

//ACTION CREATORS
export const getUser = (user) => ({ type: GET_USER, user });
export const removeUser = () => ({ type: LOGOUT_USER });

const API = 'http://0.0.0.0:3000/api/v1/';

export const loginUser = (user, navigation) => {
  return (dispatch) => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ user }),
    };
    fetch(API + 'login', reqObj)
    .then((resp) => resp.json())
    .then((data) => {
      if (data.user) {
        dispatch(getUser(data.user));
          navigation.navigate('Swipe');
        }
        else {
          navigation.navigate('Login');
          alert(
            'Incorrect Username or Password. Please try again or register.'
            );
          }
        })
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          throw error;
          });
        console.log('login action');
  };
};

export const signUpUser = (user, navigation) => {
  return (dispatch) => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ user }),
    };
    fetch(API + 'users', reqObj)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.user) {
          dispatch(getUser(data.user));
          // localStorage.setItem("token", data.jwt);
          //whereever you want to go after logging in
          navigation.navigate('Swipe');
        } else {
          //however you want  to  handle the error
          alert('Error while registering, please try again.');
          navigation.navigate('Register');
        }
      });
  };
};

// export const getCurrentUser = (token) => {
//   return (dispatch) => {
//     const reqObj = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     fetch(API + "profile", reqObj)
//       .then((resp) => resp.json())
//       .then((data) => {
//         dispatch(getUser(data.user));
//       });
//   };
// };

// export const logoutUser = () => {
//   return (dispatch) => {
//     localStorage.removeItem("token");
//     dispatch(removeUser());
//     history.push("/login");
//   };
// };
