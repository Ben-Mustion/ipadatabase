import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './buttons/Login';

class Header extends Component {
  renderContent() {
    if (this.props.auth === false) {
      return <Login />;
    } else if (!this.props.auth) {
      return <div>Loading...</div>;
    } else {
      return <div>Logged In</div>;
    }
  }

  render() {
    return <div className="ui menu">{this.renderContent()}</div>;
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
