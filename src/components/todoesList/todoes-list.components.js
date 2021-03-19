import "./todoes-list.component.css";

const TodosList = (props) => {
  return (
    <ul className="ulListToDoes">
      {props.todos.map((todo) => {
        return (
          <>
            <li className="liLists underline" key={todo.id}>
              <p className="todoText">{todo.text}</p>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => props.onChangeCheckbox(todo.id)}
                className="liInputSection"
              />
              <button
                className="button"
                onClick={() => props.onDelete(todo.id)}
              >
                Delete
              </button>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default TodosList;
