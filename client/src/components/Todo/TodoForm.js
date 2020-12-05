import { Button, TextField } from "@material-ui/core";
import { Col, Row } from 'react-bootstrap'
import React, { useState, Fragment } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <Fragment>
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
              fullWidth="True"
              label="Task"
              type="text"
              name="task"
              value={todo.task}
              onChange={handleTaskInputChange}
            />
            <Button variant="contained" color="secondary" type="submit">Submit</Button>
          </form>
        </Col>
      
      </Row>
    </Fragment>
   
  );
}

export default TodoForm;