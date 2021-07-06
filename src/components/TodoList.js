import React, { Component } from "react";
import "./TodoList.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormTask from "./FormTask";
import Task from "./Task";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.refForm = React.createRef();
  }
  state = {
    tabTask: [[], [], [], [], [], [], []],
    tabWeek: ["M", "T", "W", "Th", "F", "S", "Su"],
    activeTask: "M",
    refFrom: null,
  };

  time;
  render() {
    return (
      <div className="TodoList">
        <div className="newTask">
          <button
            onClick={
              () =>
                (this.refForm.current.FormRef.current.style =
                  "transition:0.2s; visibility: visible")

              //   console.log(this.refForm.current.FormRef.current.style)
            }
          >
            <FontAwesomeIcon className="icon" icon={faPlus} />
          </button>
          <p>New Entry</p>
        </div>

        <div className="contentTask">
          <div className="containerBtn">
            {this.state.tabWeek.map((str, index) => {
              return (
                <button
                  key={str}
                  onClick={() => {
                    this.setState({ activeTask: str });
                  }}
                >
                  {str}
                  <span key={str} id={str}>
                    0:00
                  </span>
                </button>
              );
            })}
          </div>
          <div className="container_taskDaily">
            <Task stateTodo={this.state} />
            <div className="total">
              <p>Total:</p> <span>0:00</span>
            </div>
          </div>
        </div>
        <FormTask
          ref={this.refForm}
          setStateTodo={(tabTaskNew) => this.setState({ tabTask: tabTaskNew })}
          stateOfTodo={this.state}
        />
        {console.log(this.state)}
      </div>
    );
  }
}
