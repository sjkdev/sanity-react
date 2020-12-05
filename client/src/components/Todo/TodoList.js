
import { List } from "@material-ui/core";
import React, { Fragment } from "react";
import { Col, Row } from 'react-bootstrap'
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleComplete }) {
  
  return (
  <Fragment>
    <Row className="d-flex justify-content-center">
        <Col lg={1}></Col>
        <Col lg={8}>
          <List>
          {todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              toggleComplete={toggleComplete}
            />
          ))}
          </List>
        </Col>
        <Col lg={1}></Col>
    </Row>
  </Fragment>
     
  );
}

export default TodoList;