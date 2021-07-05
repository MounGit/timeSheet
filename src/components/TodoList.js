import React, { Component } from "react";
import "./TodoList.css";
export default class TodoList extends Component {
  tabWeek = ["M", "T", "W", "Th", "F", "S", "Su"];
  time;
  render() {
    return (
      <div className="TodoList">
        <div className="newTask">
          <button>+</button>
          <p>New Entry</p>
        </div>

        <div className="contentTask">
          <div className="containerBtn">
            {this.tabWeek.map((str, index) => {
              return (
                <button key={str}>
                  {str}
                  <span key={str}>0:00</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
