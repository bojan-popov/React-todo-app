const TodosFooter = (props) => {
  return (
    <div className="divButtons">
      <button
        className="btnSelectAll button"
        onClick={() => props.onSelectAll(props.todo)}
      >
        Mark all completed
      </button>
      <button
        className="btnDeleteAll button"
        onClick={() => props.onDeleteAllCompleted(props.todo)}
      >
        Clear all completed
      </button>
    </div>
  );
};
export default TodosFooter;
