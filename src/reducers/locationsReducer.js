import {
    START_UPDATE,
    UPDATE_SUCCESSFUL,
    UPDATE_FAILURE,
    START_DELETE,
    DELETE_SUCCESSFUL,
    DELETE_FAILURE,
  } from '../actions';
  
  const initialState = {
    properties: [],
    isUpdating: false,
    isDeleting: false,
    error: ''
  };
  
  const locationsReducer = (state = initialState, action) => {
    switch (action.type) {
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
  
  export default locationsReducer;