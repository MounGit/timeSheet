import React from "react";
import Nav from "./components/nav";
import Section1 from "./components/section-1";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div className="App">
      <Nav />
      <Section1 />
      <TodoList />
    </div>
  );
}

export default App;
