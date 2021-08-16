import actionTypes from '../action/actionTypes';
import Guitar from '../../models/guitar';

function guitarReducer(guitars:Array <Guitar> = [], action:{type:string, guitars:Guitar}) {
  if (action.type === actionTypes.LOAD_GUITARS) {
    return action.guitars;
  }
  return guitars;
}

export default guitarReducer;
