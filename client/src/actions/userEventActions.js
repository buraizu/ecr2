import * as types from './actionTypes';

export const setEvent = (event) => {
  let data = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event)
  }
  return function(dispatch) {
    return fetch(`/api/user_events`, data)
      .then(response => console.log(response))
      .then(responseJson => {
        dispatch({type: 'ADD_USER_EVENT', userEvent: responseJson})
      })
  }
}

// export const setEvent = (feature) => {
//   feature.updated_at = new Date();
//   let featureId = feature.id;
//   let data = {
//     method: 'PUT',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(feature)
//   }
//
//   return function(dispatch) {
//     return fetch(`/api/events/${featureId}`, data)
//       .then(response => response.json())
//       .then(responseJson => {
//         dispatch({type: 'FEATURE_EVENT', event: responseJson})
//       })
//   }
// }
