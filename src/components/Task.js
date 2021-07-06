import { faClock, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabTaskActive: [],
    };
    this.setState({
      tabTaskActive:
        this.props.stateTodo.tabTask[
          this.props.stateTodo.tabWeek.indexOf(this.props.stateTodo.activeTask)
        ],
    });
  }

  //   componentDidMount() {
  //     this;
  //   }
  render() {
    return (
      <div className="Task">
        Elvis
        {/* {console.log(this.props.stateTodo)} */}
        {console.log(this.state.tabTaskActive)}
        {/* {console.log(this.props.stateTodo.tabTask)} } */}
        {this.state.tabTaskActive.length > 0 &&
          this.state.tabTaskActive.map((taskObj, index) => {
            return (
              <div key={index} className="task-item">
                Lemic
                {console.log(taskObj)}
                <div className="taskContent">
                  <h4>{taskObj.titre}</h4>
                  <p>{taskObj.description}</p>
                </div>
                <div>
                  <span className="timer">
                    {taskObj.timerForm.h}:
                    {taskObj.timerForm.m < 10
                      ? `0${taskObj.timerForm.m}`
                      : taskObj.timerForm.m}
                  </span>{" "}
                  <button>{faClock}Stop</button> <button>{faPencilAlt}</button>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
