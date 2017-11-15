import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';
const initialState = [];

export const errorReducer = (state = initialState, action) => {
  Object.freeze(state);
    switch(action.type){
      case RECEIVE_ERRORS:
      let nextState = [];
      action.errors.forEach(error => (nextState.push(error)));
      return action.errors;
    case CLEAR_ERRORS:
      let clearState = [];
      return clearState;
    default:
      return state;
    }
};
