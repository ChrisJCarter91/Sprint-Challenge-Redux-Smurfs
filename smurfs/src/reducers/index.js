/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF,
  SMURF_FAILURE,
} from '../actions/index'

const initialState = {
  smurfs: [],
  loading: true,
  error: null,
}

export const reducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS_START:
    return {
      ...state,
      loading: true,
      error: null,
    }
    case FETCH_SMURFS_SUCCESS: 
    return {
      ...state,
      smurfs: [...state.smurfs, ...action.payload],
      loading: false,
      error: null,
    }
    case FETCH_SMURFS_FAILURE: 
    return {
      ...state,
      error: action.payload,
    }
    case ADD_SMURF: 
    return {
      ...state,
      smurfs: [...state.smurfs,...action.payload],
      loading: false,
      error: null,
    }
    case SMURF_FAILURE: 
    return {
      ...state,
      error: action.payload,
    }
    default:
    return state;
  }
}