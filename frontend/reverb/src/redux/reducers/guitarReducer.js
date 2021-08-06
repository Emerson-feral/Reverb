import actionTypes from '../action/actionTypes';

function guitarReducer(guitars = [], action) {
  if (action.type === actionTypes.LOAD_GUITARS) {
    return action.guitars;
  }
  return guitars;
}

export default guitarReducer;
