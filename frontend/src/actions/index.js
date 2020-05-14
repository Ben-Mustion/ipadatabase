import axios from 'axios';
import swal from 'sweetalert';
import { FETCH_USER, FETCH_ERRORS, CLEAR_ERRORS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const updateUser = (values, history) => {
  axios
    .put('/api/users', values)
    .then(res => {
      if (res.data.result === 'success') {
        swal('Success!', res.data.message, 'success').then(value => {
          history.push('/beers');
        });
      } else if (res.data.result === 'error') {
        swal('Error!', res.data.message, 'error');
      }
    })
    .catch(error => {
      console.log(error);
      swal('Error!', 'Unexpected error', 'error');
    });
};

export const resetErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
