import axios from 'axios';
import * as types from '../constants/ActionTypes.jsx';

export function someActionHandler() {
  return {
    type: types.SOME_ACTION,
  };
}
