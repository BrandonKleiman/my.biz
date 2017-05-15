import React from 'react';
import { Route } from 'react-router';
import Landing from '../pages/Landing';
import Bizmenu from '../pages/Bizmenu';
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
        <Route exact path="/" component={Landing} />
        <Route path="/manage" component={Bizmenu} />
      </div>
    );
  }
}

