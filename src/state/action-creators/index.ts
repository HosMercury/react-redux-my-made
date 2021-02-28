import axios from 'axios';
import { Dispatch } from 'react';
import { TodosActionTypes } from '../action-types';
import { Todo } from '../reducers/todoReducer';
import { Action } from '../actions';

export const fetchTodos = () => {
  return async (dispatch: Dispatch<Action>) => {
    // loading
    dispatch({
      type: TodosActionTypes.FETCH_TODOS
    });

    // success
    try {
      const url = 'https://jsonplaceholder.typicode.com/todos';
      const { data }: { data: Todo[] } = await axios.get(url);
      dispatch({
        type: TodosActionTypes.FETCH_TODOS_SUCCESS,
        payload: data
      });
    } catch (error) {
      // rrore
      dispatch({
        type: TodosActionTypes.FETCH_TODOS_ERROR,
        payload: error.message
      });
    }
  };
};
