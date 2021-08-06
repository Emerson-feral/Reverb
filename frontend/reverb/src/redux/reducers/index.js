import { combineReducers } from 'redux';
import guitarReducer from './guitarReducer';

const rootReducer = combineReducers({
  guitars: guitarReducer
});
export default rootReducer;
