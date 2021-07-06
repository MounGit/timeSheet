import React, { Component } from "react";
import "./FormTask.css";
export default class FormTask extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: { h: 0, m: 0, s: 0 }, seconds: 0 };

    this.FormRef = React.createRef();
    this.props.setStateTodo({ refForm: this.FormRef });
    this.FormtextAreaRef1 = React.createRef();
    this.FormtextAreaRef2 = React.createRef();
    this.intervalCode = null;
    this.startTimer = this.startTimer.bind(this);
    this.countSeconds = this.countSeconds.bind(this);
  }
  countSeconds() {
    let secondsCount = this.state.seconds + 1;

    this.setState({ timer: this.secondsToTime(secondsCount) });
  }
  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }
  componentDidMount() {
    let seconds = this.secondsToTime(this.state.seconds);
    this.setState({ timer: seconds });
  }
  startTimer() {
    this.intervalCode = setInterval(this.countSeconds, 1000);
  }

  //   componentWillUnmount() {
  //     clearInterval(this.intervalCode);
  //   }
  deleteTask() {
    let indexOfTabActiveDay = this.props.stateOfTodo.tabWeek.indexOf(
      this.props.stateOfTodo.activeTask
    );
    let tabActiveDay = this.props.stateOfTodo[indexOfTabActiveDay];
    for (let i in this.props.stateOfTodo[indexOfTabActiveDay])
      if (tabActiveDay[i].refTask === this.FormRef.current) {
        tabActiveDay.splice(i, 1);
        let newTabTask = this.props.stateOfTodo.tabTask;
        newTabTask[indexOfTabActiveDay] = tabActiveDay;
        this.props.setStateTodo({
          tabTask: newTabTask,
        });
      }
  }
  updateSateOfTodo() {
    let indexOfTabActiveDay = this.props.stateOfTodo.tabWeek.indexOf(
      this.props.stateOfTodo.activeTask
    );

    let newTabTask = this.props.stateOfTodo.tabTask;
    console.log(this.props.stateOfTodo.tabTask);

    let tabTaskActiveDay = newTabTask[indexOfTabActiveDay];
    tabTaskActiveDay.length > 0
      ? (newTabTask[indexOfTabActiveDay] = [
          ...tabTaskActiveDay,
          {
            titre: this.FormtextAreaRef1.current.value,
            description: this.FormtextAreaRef2.current.value,
            timerForm: this.state.timer,
            refTask: this.FormRef.current,
          },
        ])
      : (newTabTask[indexOfTabActiveDay] = [
          {
            titre: this.FormtextAreaRef1.current.value,
            description: this.FormtextAreaRef2.current.value,
            timerForm: this.state.timer,
            refTask: this.FormRef.current,
          },
        ]);

    this.props.setStateTodo(newTabTask);
  }

  //   componentWillUnmount() {
  //     console.log(this.stateOfTodo);
  //   }
  render() {
    return (
      <div
        style={{ visibility: "hidden" }}
        ref={this.FormRef}
        className="FormTask"
      >
        <div className="container_form">
          <div className="header_form">
            <h3>Editer L'entrée de la timeSheet</h3>{" "}
            <p>date du jour de la tâche</p>
          </div>

          <div className="content_FormTask">
            <form>
              <div className="formTask-line">
                <label htmlFor="titre_tache">Titre de la tâche</label>
                <textarea
                  id="titre_tache"
                  ref={this.FormtextAreaRef1}
                  rows="3"
                  cols="70"
                ></textarea>
              </div>

              <div className="formTask-line">
                <label htmlFor="description_tache">
                  Description de la tâche
                </label>
                <div className="container_timer">
                  <textarea
                    id="description_tache"
                    ref={this.FormtextAreaRef2}
                    rows="3"
                    cols="70"
                  ></textarea>
                  {/* <input type="text" /> */}
                  <input
                    text="text"
                    placeholder="Edit timer"
                    value={`${this.state.timer.h}:${
                      this.state.timer.m < 10
                        ? `0${this.state.timer.m}`
                        : this.state.timer.m
                    }`}
                  />
                </div>
              </div>
            </form>
            <div className="container_btnFormTask">
              <div>
                {" "}
                <button
                  onClick={() => {
                    this.startTimer();
                    this.FormRef.current.setAttribute(
                      "style",
                      "visibility:hidden"
                    );
                    this.updateSateOfTodo();
                  }}
                >
                  Submit
                </button>{" "}
                <button
                  onClick={() => {
                    this.FormRef.current.setAttribute(
                      "style",
                      "visibility:hidden"
                    );
                  }}
                >
                  Cancel
                </button>
              </div>{" "}
              <button onClick={() => this.deleteTask()}>Delete</button>
            </div>
            {/* {console.log(this.props.stateOfTodo.tabTask)} */}
          </div>
        </div>
      </div>
    );
  }
}
