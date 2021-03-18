const TodosFooter = (props) => {
  return (
    <div>
      <button onClick={() => props.onSelectAll(props.todo)}>
        Mark all completed
      </button>
      <button onClick={() => props.onDeleteAllCompleted(props.todo)}>
        Clear all completed
      </button>
    </div>
  );
};
export default TodosFooter;
