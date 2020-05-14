import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import * as actions from '../../actions';

const ProfileNew = ({ history, updateUser, resetErrors }) => {
  const auth = useSelector(state => state.auth);
  const errors = useSelector(state => state.errors);

  useEffect(() => {
    resetErrors();
  }, []);

  const renderError = () => {
    if (errors) {
      return <div>Username already taken</div>;
    }
  };
  return (
    <div>
      <Form
        onSubmit={values => {
          values._id = auth._id;
          updateUser(values, history);
        }}
      >
        {({ handleSubmit, pristine, form, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username</label>
              <Field
                name="userName"
                component="input"
                type="text"
                placeholder="User Name"
              />
            </div>
            {renderError()}
            <div>
              <label>Location</label>
              <Field
                name="location"
                component="input"
                type="text"
                placeholder="Where are you from?"
              />
            </div>
            <div>
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button
                type="button"
                disabled={pristine || submitting}
                onClick={() => {
                  form.reset();
                  resetErrors();
                }}
              >
                Clear Values
              </button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export default connect(null, actions)(withRouter(ProfileNew));
