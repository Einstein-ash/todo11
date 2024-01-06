import React from "react";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci"

import "../assets/css/todo.css";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    async function getTodos() {
      const res = await fetch("/api/todos");
      const todos = await res.json();

      setTodos(todos);

      console.log(todos);
    }
    getTodos();
  }, []);

  //  -------------- create new todo const here---------------------

  const createNewTodo = async (e) => {
    e.preventDefault();
    if (content.length > 0) {
      const res = await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify({ todo: content }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newTodo = await res.json();

      setContent("");
      setTodos([...todos, newTodo]);
    }
  };

  //  -------------- update todo const here---------------------

  // const updateTodo = async (todoId, todoStatus) => {
  //   const res = await fetch(`/api/todos/${todoId}`, {
  //     method: "PUT",
  //     body: JSON.stringify({ status: todoStatus }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const json = await res.json();
  //   if (json.acknowledged) {
  //     setTodos((currentTodos) => {
  //       return currentTodos.map((currentTodo) => {
  //         if (currentTodo._id === todoId) {
  //           return { ...currentTodo, status: !currentTodo.status };
  //         }
  //         return currentTodo;
  //       });
  //     });
  //   }
  // };
  //  -------------- edit- wala- update todo const here---------------------

  const updateTodo = async (todoId, todoStatus, todoContent) => {
    const res = await fetch(`/api/todos/${todoId}`, {
      method: "PUT",
      body: JSON.stringify({ status: todoStatus, content: todoContent }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const json = await res.json();
    if (json.acknowledged) {
      setTodos((currentTodos) => {
        return currentTodos.map((currentTodo) => {
          if (currentTodo._id === todoId) {
            return { ...currentTodo, status: !todoStatus, content: todoContent };
          }
          return currentTodo;
        });
      });
    }
  };
  


  //  -------------- delete todo const here---------------------

  const deleteTodo = async (todoId) => {
    const res = await fetch(`/api/todos/${todoId}`, {
      method: "DELETE",
    });
    const json = await res.json();
    if (json.acknowledged) {
      setTodos((currentTodos) => {
        return currentTodos.filter((currentTodo) => currentTodo._id !== todoId);
      });
    }
  };

//  ------------- EDIT todo const here---------------------

const editTodo = async (todoId) => {
  // const res = await fetch(`/api/todos/${todoId}`, {
  //   method: "DELETE",
  // });
  // const json = await res.json();
  // if (json.acknowledged) {
  //   setTodos((currentTodos) => {
  //     return currentTodos.filter((currentTodo) => currentTodo._id !== todoId);
  //   });
  // }
};

 
  // --------return down here --------------

  return (
    <div className="todo-container">
      <div className="title"> Your To-do List </div>
      {/* {(todos.length > 0) && <pre>{JSON.stringify(todos, null , 2)}</pre>} */}
      <div className="todo-input-form">
        <form className="form" onSubmit={createNewTodo}>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter a new todo..."
            className="form_input"
            required
          />
          <button type="submit"> Add Todo </button>
        </form>
      </div>
      <div className="todos">
        {todos.length > 0 &&
          todos.map((todo) => (
            <div className="todo" key={todo._id}>
              <p>{todo.todo}</p>
              <div>
                <button
                  className="todo__status"
                  onClick={() => updateTodo(todo._id, todo.status,todo.content)}
                >
                  {todo.status ? "☑" : "☐"}
                </button>
                {/* edit buton down */}
                {/* <button 
                className="todo-edit"
                onClick={() => editTodo(todo._id)}
                >
                  <CiEdit />
                </button> */}

                
{/* edit button above  */}
                <button
                  className="todo_delete"
                  onClick={() => deleteTodo(todo._id)}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoPage;
