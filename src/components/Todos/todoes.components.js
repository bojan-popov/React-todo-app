import { useState } from "react";

import TodosList from "../todoesList/todoes-list.components";
import TodosHeader from "../TodosHeader/todos-header.component";
import TodosFooter from "../TodosFooter/todoes.footer";

import "./todoes.components.css";
function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}
const Todos = () => {
  const [val, setVal] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangeHandler = (e) => {
    setVal(e.target.value);
  };

  const onKeyUpHandler = (e) => {
    if (e.key === "Enter" && val !== "") {
      setTodos(
        todos.concat([{ id: nextTodoId(todos), text: val, completed: false }])
      );
      setVal("");
    }
  };
  const onChangeCheckboxHandler = (id) => {
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const onDeleteHandler = (id) => {
    const newTodos = todos.filter((todo) => {
      if (id === todo.id) {
        return false;
      }
      return true;
    });
    setTodos(newTodos);
  };

  const onSelectAllHandled = () => {
    const newTodos = todos.map((todo) => {
      if (todo.completed !== true) {
        todo.completed = true;
        return todo;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const onDeleteAllCompletedHandler = () => {
    const newTodos = todos.filter((todo) => {
      if (todo.completed === true) {
        return false;
      }
      return true;
    });
    setTodos(newTodos);
  };

  return (
    <div id="mainDiv">
      <TodosHeader
        val={val}
        onChangeHandler={onChangeHandler}
        onKeyUp={onKeyUpHandler}
      />
      <TodosList
        todos={todos}
        onChangeCheckbox={(id) => onChangeCheckboxHandler(id)}
        onDelete={onDeleteHandler}
      />
      <TodosFooter
        todos={todos}
        onSelectAll={onSelectAllHandled}
        onDeleteAllCompleted={onDeleteAllCompletedHandler}
      />
    </div>
  );
};

export default Todos;
