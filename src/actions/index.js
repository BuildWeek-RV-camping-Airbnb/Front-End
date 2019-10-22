import axios from 'axios';
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
export const getUser = () => {
  dispatchEvent({ type: START_FETCHING });
  // AXIOS GET REQUEST - Hysen
};

export const getLocation = () => {
  dispatchEvent({ type: START_FETCHING });
  // AXIOS GET REQUEST - Hysen
};

export const postUser = newUser => {
  dispatchEvent({ type: START_POST });
  axiosWithAuth
    .post(`/api/users`, newUser)
    .then(res => dispatchEvent({ type: POST_SUCCESS, payload: res.data }))
    .catch(err => dispatchEvent({ type: POST_FAILURE, payload: err.response }));
};

export const postProperty = newProperty => {
  dispatchEvent({ type: START_POST });
  axiosWithAuth
    .post(`/api/properties`, newProperty)
    .then(res => dispatchEvent({ type: POST_SUCCESS, payload: res.data }))
    .catch(err => dispatchEvent({ type: POST_FAILURE, payload: err.response }));
};

export const editProperty = (updateProperty, id) => {
  dispatchEvent({ type: START_UPDATE });
  axiosWithAuth
    .put(`/api/properties/${id}`, updateProperty)
    .then(res => dispatchEvent({ type: UPDATE_SUCCESSFUL, payload: res.data }))
    .catch(err =>
      dispatchEvent({ type: UPDATE_FAILURE, payload: err.response })
    );
};

export const deleteProperty = (deleteProperty, id) => {
  dispatchEvent({ type: START_DELETE });
  axiosWithAuth
    .put(`/api/properties/${id}`, deleteProperty)
    .then(res => dispatchEvent({ type: DELETE_SUCCESSFUL, payload: res.data }))
    .catch(err =>
      dispatchEvent({ type: DELETE_FAILURE, payload: err.response })
    );
};
