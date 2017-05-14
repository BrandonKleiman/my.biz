import * as types from '../constants/ActionTypes.jsx';
import _ from 'lodash';

const initialState = {
  somevariable: null
};

export default function groups(state = initialState, action) {
  switch (action.type) {
    case types.SOME_ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}
