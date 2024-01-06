// import { useEffect , useState } from "react";

import LoginForm from "./components/login/LoginForm.jsx";
import TodoPage from "./components/todo/TodoPage.jsx";

function App() {
//   const [todos , setTodos] = useState([]);


// useEffect(() => {
//   async function getTodos(){
//     const res  = await fetch("/api/todos");
//     const todos = await res.json();

//     setTodos(todos)

//     console.log(todos);
//     }
//     getTodos();
// }, [])


  return (
    <div >
      {/* {(todos.length > 0) && <pre>{JSON.stringify(todos, null , 2)}</pre>} */}
      <TodoPage/>
      <LoginForm/>
    </div>
  );
}

export default App;
