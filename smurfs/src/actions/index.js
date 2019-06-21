/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios'

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const SMURF_FAILURE = 'SMURF_FAILURE';

export const fetchSmurfsStart = () => dispatch => {
  dispatch ({type: FETCH_SMURFS_START});
  axios
  .get('http://localhost:3333/smurfs')
  .then(response => {
    console.log(response)
    dispatch({type: FETCH_SMURFS_SUCCESS, payload: response.data})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: FETCH_SMURFS_FAILURE, payload: "error"})
  })
}

export const addSmurf = smurf => dispatch => {
  axios
  .post('http://localhost:3333/smurfs', smurf)
  .then(response => {
    console.log(response)
    dispatch({type: ADD_SMURF, payload: response.data})
  })
  .catch(error => {
    console.log(error)
    dispatch({type: SMURF_FAILURE, payload: "error"})
  })
}