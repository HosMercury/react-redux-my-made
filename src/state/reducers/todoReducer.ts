import { Action } from '../actions';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodosState {
  loading: boolean;
  error: string | null;
  data: Todo[];
}

const initialState = {
  loading: true,
  error: null,
  data: []
};

const reducer = (
  state: TodosState = initialState,
  action: Action
): TodosState => {
  switch (action.type) {
    case 'fetch_todos':
      return { loading: true, error: null, data: [] };
    case 'fetch_todos_success':
      return { loading: false, error: null, data: action.payload };
    case 'fetch_todos_error':
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
