import { Todo } from './../reducers/todoReducer';
import { TodosActionTypes } from '../action-types';

interface FetchTodosAction {
  type: TodosActionTypes.FETCH_TODOS;
}

interface FetchTodosSuccessAction {
  type: TodosActionTypes.FETCH_TODOS_SUCCESS;
  payload: Todo[];
}

interface FetchTodosErrorAction {
  type: TodosActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

export type Action =
  | FetchTodosAction
  | FetchTodosSuccessAction
  | FetchTodosErrorAction;
