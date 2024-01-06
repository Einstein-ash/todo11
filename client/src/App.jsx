// import { useEffect , useState } from "react";

import LoginForm from "./components/login/LoginForm.jsx";
import TodoPage from "./components/todo/TodoPage.jsx";
// import UpdatePage from "./components/todo/UpdatePage.jsx";

function App() {
  return (
    <div >
     
      {/* <UpdatePage/> */}
      <TodoPage/>
      <LoginForm/>
    </div>
  );
}

export default App;
