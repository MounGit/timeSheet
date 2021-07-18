import React, { Component } from "react";
import "./FormTask.css";
export default class FormTask extends Component {
  constructor(props) {
    super(props);
    let indexOfFocusTask = this.props.stateOfTodo.indexOfFocusTask;
    this.state = {
      timer: { h: 0, mm: 0, s: 0, seconds: 0 },
      focusTask: null,
      isSubmit: this.props.stateOfTodo.submit,
    };

    this.FormRef = React.createRef();
    this.props.setStateTodo(
      this.props.stateOfTodo.tabTask,
      this.props.stateOfTodo.tabTaskActive,
      this.FormRef
    );
    this.tabInputNb = [];
    this.FormtextAreaRef1 = React.createRef();
    this.FormtextAreaRef2 = React.createRef();
    this.btnRef = React.createRef();
    this.intervalCode = null;
    this.startTimer = this.startTimer.bind(this);
    // this.countSeconds = this.countSeconds.bind(this);
    this.clearTextarea = this.clearTextarea.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  // countSeconds() {
  //   let secondsCount = this.state.seconds + 1;

  //   this.setState({ timer: this.secondsToTime(secondsCount) });
  // }
  // secondsToTime(secs) {
  //   let hours = Math.floor(secs / (60 * 60));

  //   let divisor_for_minutes = secs % (60 * 60);
  //   let minutes = Math.floor(divisor_for_minutes / 60);

  //   let divisor_for_seconds = divisor_for_minutes % 60;
  //   let seconds = Math.ceil(divisor_for_seconds);

  //   let obj = {
  //     h: hours,
  //     m: minutes,
  //     s: seconds,
  //     seconds: secs,
  //   };
  //   return obj;
  // }

  updateDataTabTask() {
    let newTabTaskActive = this.props.stateOfTodo.tabTaskActive;
  }
  // componentDidMount() {
  //   let seconds = this.secondsToTime(this.state.timer.seconds);
  //   this.setState({ timer: seconds });
  // }

  componentDidUpdate() {
    console.log("FormTask:", this.props.stateOfTodo.submit);
  }

  componentWillUnmount() {
    this.FormRef.current.setAttribute("style", "visibility:visible");
  }
  startTimer() {
    this.intervalCode = setInterval(this.countSeconds, 1000);
  }

  //   componentWillUnmount() {
  //     clearInterval(this.intervalCode);
  //   }
  deleteTask() {
    console.log("Dans ma fonction");
    let indexOfTabActiveDay = this.props.stateOfTodo.tabWeek.indexOf(
      this.props.stateOfTodo.activeTask
    );
    let tabActiveDay = this.props.stateOfTodo.tabTaskActive;
    // console.log(this.props.stateOfTodo);
    // this.FormRef.current.remove();
    // for (let i in tabActiveDay){
    //   console.log("Dans mon for");
    //   if (tabActiveDay[i].refTask === this.FormRef.current) {
    //     console.log(`dans ma condition ${tabActiveDay[i].refTask}`  )

    //     tabActiveDay.splice(i, 1);
    //     let newTabTask = this.props.stateOfTodo.tabTask;

    //     newTabTask[indexOfTabActiveDay] = tabActiveDay;
    //     console.log(newTabTask[indexOfTabActiveDay]);
    //     this.props.setStateTodo({
    //       tabTask: newTabTask, tabTaskActive: tabActiveDay,
    //       refForm: this.props.stateOfTodo.refForm
    //     });
    //   }
    // }
  }
  clearTextarea() {
    this.FormtextAreaRef1.current.value = "";
    this.FormtextAreaRef2.current.value = "";
  }

  // isValidInput(nb) {
  //   tabNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  //   return tabNumber.includes(nb);
  // }

  updateDataStateOfTodo = () => {
    let indexOfTabActiveDay = this.props.stateOfTodo.tabWeek.indexOf(
      this.props.stateOfTodo.activeTask
    );
    let newTabTask = this.props.stateOfTodo.tabTask;
    let newObj =
      newTabTask[indexOfTabActiveDay][this.props.stateOfTodo.indexOfFocusTask];
    newObj.titre = this.FormtextAreaRef1.current.value;
    newObj.description = this.FormtextAreaRef2.current.value;

    newTabTask[indexOfTabActiveDay][this.props.stateOfTodo.indexOfFocusTask] =
      newObj;

    let newTabTaskActive = newTabTask[indexOfTabActiveDay];
    this.props.setStateTodo(
      newTabTask,
      newTabTaskActive,
      this.props.stateOfTodo.refForm
    );
  };

  editInput = () => {
    let input = this.FormRef.current.querySelector("input");
    input.addEventListener("onFocus", () => {
      console.log("dans ma fonction focus");
      input.value = "";
      input.addEventListener("onKeyUp", (e) => {
        let tab = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":"];

        if (!tab.includes(e.key)) {
          input.value = input.value.substr(0, input.value.length - 1);
        }
      });
    });

    input.addEventListener("onBlur", () => {
      input.value = `${this.tabInputNb[0]}${this.tabInputNb[1]}: ${this.tabInputNb[2]}${this.tabInputNb[3]}:${this.tabInputNb[4]}${this.tabInputNb[5]}`;
    });
  };
  submitDataStateOfTodo = () => {
    let indexOfTabActiveDay = this.props.stateOfTodo.tabWeek.indexOf(
      this.props.stateOfTodo.activeTask
    );

    let newTabTask = this.props.stateOfTodo.tabTask;
    console.log(newTabTask);

    let tabTaskActiveDay = newTabTask[indexOfTabActiveDay];
    console.log(tabTaskActiveDay);
    tabTaskActiveDay.length > 0
      ? (newTabTask[indexOfTabActiveDay] = [
          ...tabTaskActiveDay,
          {
            titre: this.FormtextAreaRef1.current.value,
            description: this.FormtextAreaRef2.current.value,
            timerForm: this.state.timer,
            refTask: this.FormRef.current,
            referenceTask: null,
          },
        ])
      : (newTabTask[indexOfTabActiveDay] = [
          {
            titre: this.FormtextAreaRef1.current.value,
            description: this.FormtextAreaRef2.current.value,
            timerForm: this.state.timer,
            refTask: this.FormRef.current,
            referenceTask: null,
          },
        ]);

    this.props.setStateTodo(
      newTabTask,
      tabTaskActiveDay,
      this.props.stateOfTodo.refForm
    );
  };

  // shouldComponentUpdate() {
  //   this.setState({ isSubmit: this.props.stateOfTodo.submit });
  // }

  // componentWillUnmount() {
  //   console.log(this.stateOfTodo);
  // }
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
                    placeholder="00:00:00"
                    // value={`${this.state.timer.h}:${
                    //   this.state.timer.m < 10
                    //     ? `0${this.state.timer.m}`
                    //     : this.state.timer.m
                    // }:${
                    //   this.state.timer.s < 10
                    //     ? `0${this.state.timer.s}`
                    //     : this.state.timer.s
                    // }`}
                  />
                </div>
              </div>
            </form>
            <div className="container_btnFormTask">
              <div>
                {" "}
                <button
                  ref={this.btnRef}
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.changebtnSubmit(true);
                    this.props.changeStatusFormDisplay(false);
                    // this.startTimer();
                    if (this.btnRef.current.textContent === "update") {
                      this.updateDataStateOfTodo();
                      // console.log(this.props.stateOfTodo.focusTask);

                      // let titleNode =
                      //   this.props.stateOfTodo.focusTask.current.querySelector(
                      //     "h4"
                      //   );
                      // let paraphNode =
                      //   this.props.stateOfTodo.focusTask.current.querySelector(
                      //     "p"
                      //   );
                      // titleNode.textContent =
                      //   this.FormtextAreaRef1.current.value;
                      // paraphNode.textContent =
                      //   this.FormtextAreaRef2.current.value;
                    } else {
                      this.submitDataStateOfTodo();
                    }
                    this.FormRef.current.setAttribute(
                      "style",
                      "visibility:hidden"
                    );

                    // setTimeout(
                    //   function () {
                    //     this.clearTextarea();
                    //   }.bind(this),
                    //   500
                    // );
                    this.clearTextarea();
                  }}
                >
                  {console.log("texte:", this.props.stateOfTodo.submit)}
                  {this.state.isSubmit === true ? "submit" : "update"}
                </button>{" "}
                <button
                  onClick={(e) => {
                    this.props.changebtnSubmit(true);
                    this.props.changeStatusFormDisplay(false);
                    this.FormRef.current.setAttribute(
                      "style",
                      "visibility:hidden"
                    );
                    e.preventDefault();

                    // setTimeout(
                    //   function () {
                    //     this.clearTextarea();
                    //   }.bind(this),
                    //   500
                    // );
                    this.clearTextarea();
                  }}
                >
                  Cancel
                </button>
              </div>{" "}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  this.props.changebtnSubmit(true);
                  this.props.changeStatusFormDisplay(false);
                  this.deleteTask();
                }}
              >
                Delete
              </button>
            </div>
            {/* {console.log(this.props.stateOfTodo.tabTask)} */}
          </div>
        </div>
      </div>
    );
  }
}
