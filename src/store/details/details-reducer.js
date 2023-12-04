import { SET_COUNTRY, SET_LOADING, SET_ERROR, CLEAR_DETAILS, SET_NEIGHBORS } from "./details-actions"

const initialState = {
  currentCountry: null,
  status: 'idle',
  error: null,
  neighbors: [],
}

export const detailsReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case SET_LOADING:
      return {
        ...state,
        error: null,
        status: 'loading',
      }
    case SET_ERROR:
      return {
        ...state,
        error: payload,
        status: 'rejected'
      }
    case SET_COUNTRY:
      return {
        ...state,
        currentCountry: payload,
        error: null,
        status: 'received',
      }
    case CLEAR_DETAILS:
      return initialState;
    case SET_NEIGHBORS:
      return {
        ...state,
        neighbors: payload,
      }
    default:
      return state;
  }
}
