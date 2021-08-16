import { combineReducers } from 'redux';
import guitarReducer from './guitarReducer';

const rootReducer = combineReducers({
  guitars: guitarReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
