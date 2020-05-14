import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import ProfilePage from './profile/ProfilePage';
import Welcome from './Welcome';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Header />
          <Route path="/" component={Welcome} />
          <Route exact path="/profile" component={ProfilePage} />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, actions)(App);
