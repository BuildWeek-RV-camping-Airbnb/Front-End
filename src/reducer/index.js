import {
  START_FETCHING_USER,
  FETCH_SUCCESS_USER,
  FETCH_FAILURE_USER,
  START_POST_USER,
  POST_SUCCESS_USER,
  POST_FAILURE_USER,
  START_FETCHING_PROPERTY,
  FETCH_SUCCESS_PROPERTY,
  FETCH_FAILURE_PROPERTY,
  START_POST_PROPERTY,
  POST_SUCCESS_PROPERTY,
  POST_FAILURE_PROPERTY,
  START_UPDATE,
  UPDATE_SUCCESSFUL,
  UPDATE_FAILURE,
  START_DELETE,
  DELETE_SUCCESSFUL,
  DELETE_FAILURE
} from '../actions';

const initialState = {
  properties: [],
  isFetching: false,
  isPosting: false,
  isUpdating: false,
  isDeleting: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_USER:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS_USER:
      return {
        ...state,
        isFetching: false,
        users: action.payload
      };
    case FETCH_FAILURE_USER:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case START_POST_USER:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case POST_SUCCESS_USER:
      return {
        ...state,
        isPosting: false,
        users: action.payload
      };
    case POST_FAILURE_USER:
      return {
        ...state,
        isPosting: false,
        error: action.payload
      };
    case START_FETCHING_PROPERTY:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS_PROPERTY:
      return {
        ...state,
        isFetching: false,
        properties: action.payload
      };
    case FETCH_FAILURE_PROPERTY:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case START_POST_PROPERTY:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case POST_SUCCESS_PROPERTY:
      return {
        ...state,
        isPosting: false,
        users: action.payload
      };
    case POST_FAILURE_PROPERTY:
      return {
        ...state,
        isPosting: false,
        error: action.payload
      };
    case START_UPDATE:
      return {
        ...state,
        isUpdating: true,
        error: ''
      };
    case UPDATE_SUCCESSFUL:
      return {
        ...state,
        isUpdating: false,
        properties: action.payload
      };
    case UPDATE_FAILURE:
      return {
        ...state,
        isUpdating: false,
        error: action.payload
      };
    case START_DELETE:
      return {
        ...state,
        isDeleting: true,
        error: ''
      };
    case DELETE_SUCCESSFUL:
      return {
        ...state,
        isDeleting: false,
        properties: action.payload
      };
    case DELETE_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
