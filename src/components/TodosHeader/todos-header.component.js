import "./todos-header.component.css";

const TodosHeader = (props) => {
  return (
    <div className="todoDivSection">
      <h3>Please insert your daily tasks:</h3>
      <input
        type="text"
        value={props.val}
        onChange={props.onChangeHandler}
        onKeyUp={props.onKeyUp}
        className="inputSection"
      />
    </div>
  );
};

export default TodosHeader;
