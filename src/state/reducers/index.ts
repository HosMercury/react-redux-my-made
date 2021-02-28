import { combineReducers } from 'redux';
import todosReducer from './todoReducer';

const reducers = combineReducers({
  todos: todosReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

// combine reducers ...
// get the rootstate
