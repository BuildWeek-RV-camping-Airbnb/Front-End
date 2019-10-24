import { axiosWithAuth } from '../utils/axiosWithAuth';

// action types - GET requests
export const START_FETCHING_USER = 'START_FETCHING_USER';
export const FETCH_SUCCESS_USER = 'FETCH_SUCCESS_USER';
export const FETCH_FAILURE_USER = 'FETCH_FAILURE_USER';

export const START_FETCHING_PROPERTY = 'START_FETCHING_PROPERTY';
export const FETCH_SUCCESS_PROPERTY = 'FETCH_SUCCESS_PROPERTY';
export const FETCH_FAILURE_PROPERTY = 'FETCH_FAILURE_PROPERTY';

export const START_FETCHING_PROPERTY_ID = 'START_FETCHING_PROPERTY_ID';
export const FETCH_SUCCESS_PROPERTY_ID = 'FETCH_SUCCESS_PROPERTY_ID';
export const FETCH_FAILURE_PROPERTY_ID = 'FETCH_FAILURE_PROPERTY_ID';

// action types - POST requests
export const START_POST_USER = 'START_POST_USER';
export const POST_SUCCESS_USER = 'POST_SUCCESS_USER';
export const POST_FAILURE_USER = 'POST_FAILURE_USER';

export const START_POST_PROPERTY = 'START_POST_PROPERTY';
export const POST_SUCCESS_PROPERTY = 'POST_SUCCESS_PROPERTY';
export const POST_FAILURE_PROPERTY = 'POST_FAILURE_PROPERTY';

// action types - PUT requests
export const START_UPDATE = 'START_UPDATE';
export const UPDATE_SUCCESSFUL = 'UPDATE_SUCCESSFUL';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

// action types - DELETE requests
export const START_DELETE = 'START_DELETE';
export const DELETE_SUCCESSFUL = 'DELETE_SUCCESSFUL';
export const DELETE_FAILURE = 'DELETE_FAILURE';

// action creators
export const getUser = id => dispatch => {
  dispatch({ type: START_FETCHING_USER });
  axiosWithAuth()
    .get(`/api/users/${id}`)
    .then(res => dispatch({ type: FETCH_SUCCESS_USER, payload: res.data }))
    .catch(err =>
      dispatch({ type: FETCH_FAILURE_USER, payload: err.response })
    );
};

export const getProperties = () => dispatch => {
  dispatch({ type: START_FETCHING_PROPERTY });
  axiosWithAuth()
    .get('/api/properties')
    .then(res =>
      dispatch({ type: FETCH_SUCCESS_PROPERTY, payload: res.data.properties })
    )
    .catch(err =>
      dispatch({ type: FETCH_FAILURE_PROPERTY, payload: err.response })
    );
};

export const getPropertiesByUserID = id => dispatch => {
  dispatch({ type: START_FETCHING_PROPERTY_ID });
  axiosWithAuth()
    .get(`/api/properties/user/${id}`)
    .then(res =>
      dispatch({
        type: FETCH_SUCCESS_PROPERTY_ID,
        payload: res.data.properties
      })
    )
    .catch(err =>
      dispatch({ type: FETCH_FAILURE_PROPERTY_ID, payload: err.response })
    );
};

export const postUser = newUser => dispatch => {
  dispatch({ type: START_POST_USER });
  axiosWithAuth()
    .post(`/api/users`, newUser)
    .then(res => dispatch({ type: POST_SUCCESS_USER, payload: res.data.users }))
    .catch(err => dispatch({ type: POST_FAILURE_USER, payload: err.response }));
};

export const postProperty = newProperty => dispatch => {
  dispatch({ type: START_POST_PROPERTY });
  console.log(newProperty)
  axiosWithAuth()
    .post(`/api/properties`, newProperty)
    .then(res => dispatch({ type: POST_SUCCESS_PROPERTY, payload: newProperty }))
    .catch(
      err => console.log(err.body)
      // dispatch({ type: POST_FAILURE_PROPERTY, payload: err.response }),
    );
};

export const editProperty = (updateProperty) => dispatch => {
  dispatch({ type: START_UPDATE });
  axiosWithAuth()
    .put(`/api/properties/${updateProperty.id}`, updateProperty)
    .then(res =>
      dispatch({ type: UPDATE_SUCCESSFUL, payload: updateProperty })
    )
    .catch(err => dispatch({ type: UPDATE_FAILURE, payload: err.response }));
};

export const deleteProperty = id => dispatch => {
  dispatch({ type: START_DELETE });
  return axiosWithAuth()
    .delete(`/api/properties/${id}`)
    .then(res => dispatch({ type: DELETE_SUCCESSFUL }))
    .catch(err => dispatch({ type: DELETE_FAILURE, payload: err.response }));
};
