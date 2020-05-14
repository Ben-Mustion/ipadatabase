import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProfileNew from './ProfileNew';
import * as actions from '../../actions';

const ProfilePage = ({ auth }) => {
  if (auth !== null) {
    return (
      <div>
        <ProfileNew />
        {auth ? null : <Redirect to="/beers" />}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, actions)(ProfilePage);
