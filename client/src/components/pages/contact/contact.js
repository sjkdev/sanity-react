import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState, Fragment } from "react";
import { Col, Row } from 'react-bootstrap';
import TodoForm from "../../Todo/TodoForm";
import TodoList from "../../Todo/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function contact() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

    return (
      <Fragment>
          <Row>
               
                <Col>
                    <div className="App">
                        <Typography  style={{ padding: 16 }} variant="h4">
                            <span className="d-flex justify-content-center">todo</span>
                         </Typography>
                        <TodoForm addTodo={addTodo} />
                        <TodoList
                            todos={todos}
                            removeTodo={removeTodo}
                            toggleComplete={toggleComplete}
                        />
                    </div>
                </Col>
               
          </Row>
      </Fragment>
   
  );
}

export default contact;