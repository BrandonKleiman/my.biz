import React from 'react';
import { Route } from 'react-router';
// import Profile from '../pages/Profile';
// import Login from '../pages/Login';
// import Analytics from '../pages/Analytics';
// import RunHistory from '../pages/RunHistory';
// import Leaderboard from '../pages/Leaderboard';
// import About from '../pages/About';
import { connect } from 'react-redux';
// import * as UserActions from '../actions';

@connect((store) => {
  return {
    userdata: store.userdata
  };
})

export default class App extends React.Component {
  state = { 
   }

  render() {
    return (
      <div>
        <p>test</p>
      </div>
    );
  }
}

