import { axiosWithAuth } from '../utils/axiosWithAuth';

// action types - GET requests
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// action types - POST requests
export const START_POST = 'START_POST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

// action types - PUT requests
export const START_UPDATE = 'START_UPDATE';
export const UPDATE_SUCCESSFUL = 'UPDATE_SUCCESSFUL';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

// action types - DELETE requests
export const START_DELETE = 'START_DELETE';
export const DELETE_SUCCESSFUL = 'DELETE_SUCCESSFUL';
export const DELETE_FAILURE = 'DELETE_FAILURE';

// action creators
export const getUser = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth()
    .get(`/api/users`)
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response}));
};

export const getProperties = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axiosWithAuth()
    .get(`/api/properties`)
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response}));
};

export const postUser = newUser => dispatch => {
  dispatch({ type: START_POST });
  axiosWithAuth()
    .post(`/api/users`, newUser)
    .then(res => dispatch({ type: POST_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: POST_FAILURE, payload: err.response }));
};

export const postProperty = newProperty => dispatch => {
  dispatch({ type: START_POST });
  axiosWithAuth()
    .post(`/api/properties`, newProperty)
    .then(res => dispatch({ type: POST_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: POST_FAILURE, payload: err.response }));
};

export const editProperty = (updateProperty, id) => dispatch => {
  dispatch({ type: START_UPDATE });
  axiosWithAuth()
    .put(`/api/properties/${id}`, updateProperty)
    .then(res => dispatch({ type: UPDATE_SUCCESSFUL, payload: res.data }))
    .catch(err =>
      dispatch({ type: UPDATE_FAILURE, payload: err.response })
    );
};

export const deleteProperty = (deleteProperty, id) => dispatch => {
  dispatch({ type: START_DELETE });
  axiosWithAuth()
    .put(`/api/properties/${id}`, deleteProperty)
    .then(res => dispatch({ type: DELETE_SUCCESSFUL, payload: res.data }))
    .catch(err =>
      dispatch({ type: DELETE_FAILURE, payload: err.response })
    );
};
