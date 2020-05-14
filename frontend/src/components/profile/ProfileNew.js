import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import * as actions from '../../actions';
import ProfileSchema from '../../utils/profileSchema';

class ProfileNew extends Component {
  showForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }) => {
    return (
      <form className="ui form" onSubmit={handleSubmit}>
        <div
          className={
            errors.userName && touched.userName ? 'field error' : 'field'
          }
        >
          <input
            type="text"
            name="userName"
            onChange={handleChange}
            value={values.userName}
            placeholder="Username"
          />
          {errors.userName && touched.userName ? (
            <small>{errors.userName}</small>
          ) : null}
        </div>
        <div
          className={
            errors.location && touched.location ? 'field error' : 'field'
          }
        >
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={values.location}
            placeholder="Location"
          />
          {errors.location && touched.location ? (
            <small>{errors.location}</small>
          ) : null}
        </div>
        <div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="ui button primary"
          >
            Confirm
          </button>
        </div>
      </form>
    );
  };

  render() {
    const { history } = this.props;
    const { updateUser } = actions;

    return (
      <div>
        <Formik
          initialValues={{
            userName: '',
            location: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            updateUser(values, history);
            setSubmitting(false);
          }}
          validationSchema={ProfileSchema}
        >
          {props => this.showForm(props)}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, actions)(withRouter(ProfileNew));
