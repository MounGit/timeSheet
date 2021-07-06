import React from "react";
import Nav from './components/nav';
import TodoList from "./components/TodoList";
import Section_1 from './components/section_1';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Section_1 />
      <TodoList />
    </div>
  );
}

export default App;
