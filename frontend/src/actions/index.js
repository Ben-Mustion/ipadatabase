import axios from 'axios';
import { FETCH_USER, FETCH_ERRORS, CLEAR_ERRORS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  //console.log(res);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateUser = (values, history) => dispatch => {
  axios
    .put('/api/users', values)
    .then(res => {
      dispatch({ type: FETCH_USER, payload: res.data });
      dispatch({ type: CLEAR_ERRORS });
      history.push('/beers');
    })
    .catch(err => {
      dispatch({ type: FETCH_ERRORS, payload: err });
    });
};

export const resetErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
