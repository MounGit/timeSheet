import React, { Component } from "react";
import "./TodoList.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormTask from "./FormTask";
import Container_task from "./Container_task";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.refForm = React.createRef();
    this.btn_ref1 = React.createRef();
    this.btn_ref2 = React.createRef();
    this.btn_ref3 = React.createRef();
    this.btn_ref4 = React.createRef();
    this.btn_ref5 = React.createRef();
    this.btn_ref6 = React.createRef();
    this.btn_ref7 = React.createRef();

    this.TabBtnRef = [
      this.btn_ref1,
      this.btn_ref2,
      this.btn_ref3,
      this.btn_ref4,
      this.btn_ref5,
      this.btn_ref6,
      this.btn_ref7,
    ];
    this.tabBtns = [];
    this.updateTimer = this.updateTimer.bind(this);
    // this.changeTabTask = this.changeTabTask.bind(this);
  }
  state = {
    tabTask: [[], [], [], [], [], [], []],
    tabTaskActive: [],
    tabWeek: ["M", "T", "W", "Th", "F", "S", "Su"],
    activeTask: "M",
    refForm: this.refForm,
    submit: true,
    indexOfFocusTask: null,
    formDisplay: false,
  };
  //   changeTabTask(tabTaskActiveNew) {
  //     this.setState({ tabTaskActive: tabTaskActiveNew });
  //   }

  changebtnSubmit = (bool) => {
    this.setState({ submit: bool });
  };
  changeStatusFormDisplay = (bool) => {
    this.setState({ formDisplay: bool });
  };
  componentDidMount() {
    this.btn_ref1.current.classList.add("active");
  }

  componentDidUpdate() {
    console.log("todolist:", this.state.tabTask, this.state.submit);
  }
  updateTimer(timer, state) {
    let indexOfTabActive = this.state.tabWeek.indexOf(this.state.activeTask);
    let newtabTask = state.tabTask;

    let tabTaskActiveTmp = state.tabTaskActive;
    tabTaskActiveTmp.timerForm = timer;
    newtabTask[indexOfTabActive] = tabTaskActiveTmp;

    this.setState({
      tabTask: tabTaskActiveTmp,
      tabTaskActive: tabTaskActiveTmp,
    });

    console.log("todoList", this.state.tabTask);
  }
  render() {
    return (
      <div className="TodoList">
        <div className="newTask">
          <button
            onClick={
              () => {
                let input =
                  this.refForm.current.FormRef.current.querySelector("input");
                input.value = "";
                input.placeholder = "00:00:00";
                this.refForm.current.FormRef.current.style =
                  "transition:0.2s; visibility: visible";
                this.setState({ formDisplay: true });
              }

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
              let btn = (
                <button
                  indexBtn={index}
                  className=""
                  refBis={this.TabBtnRef[index]}
                  ref={this.TabBtnRef[index]}
                  key={str}
                  onClick={(e) => {
                    if (this.state.tabTaskActive.length > 0) {
                      let tabTmp = this.state.tabTaskActive;
                      let tabTaskTmp = this.state.tabTask;
                      let indexOfTabActive = this.state.tabWeek.indexOf(
                        this.state.activeTask
                      );
                      tabTaskTmp[indexOfTabActive] = tabTmp;
                      console.log("todoList2:", tabTaskTmp);
                      this.setState({
                        tabTask: tabTaskTmp,
                        activeTask: str,
                        tabTaskActive: this.state.tabTask[index],
                      });
                      // this.updateTimer()
                    } else {
                      this.setState({
                        activeTask: str,
                        tabTaskActive: this.state.tabTask[index],
                      });
                    }
                    e.target.classList.add("active");
                    this.tabBtns.forEach((elt) => {
                      if (elt.props.refBis.current != e.target) {
                        elt.props.refBis.current.classList.remove("active");
                      }
                    });
                  }}
                >
                  {str}
                  <span key={str} id={str}>
                    0:00
                  </span>
                </button>
              );
              this.tabBtns.push(btn);
              return btn;
            })}
          </div>
          <div className="container_taskDaily">
            <Container_task
              changeStatusFormDisplay={this.changeStatusFormDisplay}
              updateTimer={this.updateTimer}
              stateTodo={this.state}
              changeTimer={(newTabTask, newTabTaskActive) => {
                this.setState({
                  tabTask: newTabTask,
                  tabTaskActive: newTabTaskActive,
                });
              }}
              setStateTodo={(index, isSubmit) =>
                this.setState({
                  indexOfFocusTask: index,
                  submit: isSubmit,
                })
              }
            />
            <div className="total">
              <p>Total:</p> <span>0:00</span>
            </div>
          </div>
        </div>
        <FormTask
          changebtnSubmit={this.changebtnSubmit}
          changeStatusFormDisplay={this.changeStatusFormDisplay}
          ref={this.refForm}
          setStateTodo={(tabTaskNew, tabTaskActiveNew, refFormNew) =>
            this.setState({
              tabTask: tabTaskNew,
              tabTaskActive: tabTaskActiveNew,
              refForm: refFormNew,
            })
          }
          stateOfTodo={this.state}
        />
        {console.log(this.state)}
        {console.log("ref", this.refForm.current)}
      </div>
    );
  }
}
