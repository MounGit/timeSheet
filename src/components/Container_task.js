import React, { Component } from "react";
import Task from "./Task";
export default class Container_task extends Component {
  render() {
    return (
      <div className="Task">
        {/* {console.log(this.props.stateTodo)} */}
        {console.log(this.props.stateTodo.tabTaskActive)}
        {this.props.stateTodo.tabTaskActive.map((taskObjBis, index) => {
          return (
            <div className="container_task">
              <Task
                updateTimer={this.props.updateTimer}
                IndexOfTask={index}
                stateTodo={this.props.stateTodo}
                taskObj={taskObjBis}
                setStateTodo={this.props.setStateTodo}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
