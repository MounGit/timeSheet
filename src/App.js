import React from "react";
import Nav from "./components/nav";
import TodoList from "./components/TodoList";
import Section_1 from "./components/section_1";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Route path="/Home" exact component={Home} />
        <Route path="/TodoList" exact component={TodoList}/>
      </Router>

      {/* <Section_1 /> */}
    </div>
  );
}

export default App;
