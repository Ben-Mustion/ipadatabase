import React from 'react';

const Login = () => {
  return (
    <div className="ui google plus button">
      <a style={{ color: 'white' }} href="/auth/google">
        Login With Google
      </a>
      <i style={{ paddingLeft: '10px' }} className="google icon"></i>
    </div>
  );
};

export default Login;
