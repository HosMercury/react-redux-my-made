import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/reducers';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const TodoList = () => {
  const { fetchTodos } = useActions();
  const { loading, error, data } = useTypedSelector(
    (state: RootState) => state.todos
  );

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      Todos
      {loading && <h3>Loading ... </h3>}
      {error && <h3> {error} </h3>}
      <ul>{data && data.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>
    </div>
  );
};

export default TodoList;
