import "bootstrap/dist/css/bootstrap.min.css";
import "./todoes-list.component.css";
import { Container, Row, Col } from "react-bootstrap";
const TodosList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <>
            <li className="breakLine" key={todo.id}>
              <Container className="">
                <Row className="justify-content-md-center">
                  <Col md="auto">
                    <p className="todoText">{todo.text}</p>
                  </Col>
                  <Col xs lg="2">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => props.onChangeCheckbox(todo.id)}
                      className="liInputSection"
                    />
                  </Col>
                  <Col xs lg="2">
                    <button onClick={() => props.onDelete(todo.id)}>
                      Delete
                    </button>
                  </Col>
                </Row>
              </Container>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default TodosList;
